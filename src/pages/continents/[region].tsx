import React from 'react';
import { GetStaticProps } from 'next';
import {
  Box,
  Flex,
  Container,
  Text,
  Image,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import api from '../../services/api';

import { FiInfo } from 'react-icons/fi';

interface ContinentProps {
  continentData: {
    title: string;
    countries: string;
    languages: string;
    description: string;
    image: string;
    mostVisitedCities: {
      rank: string;
      city: string;
      country: string;
    }[];
  };
}

export default function RegionContinent({ continentData }: ContinentProps) {
  const mostVisitedCities = continentData.mostVisitedCities.length;

  return (
    <>
      <Header />
      <Flex
        align="flex-end"
        justify="center"
        w="100%"
        height={{ base: '30vh', md: '60vh' }}
        mb={[4, 8]}
        position="relative"
      >
        <Image
          src={`${continentData.image}`}
          filter="brightness(0.6)"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Container maxWidth={1280} position="absolute" pb={8}>
          <Text casing="capitalize" color="white" as="h1" fontSize="4xl">
            {continentData.title}
          </Text>
        </Container>
      </Flex>

      <Container maxWidth={1280} py={{ base: '0', lg: '8' }}>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Text lineHeight="8" flex="1" display="inline-block">
            {continentData.description}
          </Text>
          <Flex
            mt={{ base: '4', lg: '0' }}
            flex="1"
            align="center"
            justify="center"
          >
            <Flex direction="column" flex="1" align="center" justify="center">
              <Text fontSize="3xl" color="highlightColor" fontWeight="bold">
                {continentData.countries}
              </Text>
              <Text fontWeight="bold" as="span" color="gray.600">
                países
              </Text>
            </Flex>

            <Flex direction="column" flex="1" align="center" justify="center">
              <Text fontSize="3xl" color="highlightColor" fontWeight="bold">
                {continentData.languages}
              </Text>
              <Text fontWeight="bold" as="span" color="gray.600">
                línguas
              </Text>
            </Flex>

            <Flex direction="column" flex="1" align="center" justify="center">
              <Text fontSize="3xl" color="highlightColor" fontWeight="bold">
                {mostVisitedCities}
              </Text>
              <Flex
                align="center"
                fontSize={['15px', '16px']}
                fontWeight="bold"
                as="span"
                color="gray.600"
              >
                Cidades +100
                <Tooltip
                  label="Quantidade de cidades neste continente mais visitadas do mundo"
                  placement="auto"
                >
                  <Flex align="center" _hover={{ cursor: 'pointer' }}>
                    <FiInfo
                      size="1rem"
                      style={{ marginLeft: '0.5rem', display: 'inline' }}
                    />
                  </Flex>
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Text as="h2" mt="8" fontSize="3xl">
          Cidades +100
        </Text>

        <Flex flexWrap="wrap" align="center" justify="center">
          {continentData.mostVisitedCities.map((city) => (
            <Box
              key={city.rank}
              mt="8"
              w={{ base: '100%', lg: '23%' }}
              marginRight="4"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor="highlightColor"
            >
              <Image src="/continents/africa.jpg" />
              <Box p="6">
                <Box d="flex">
                  <Box>
                    <Text fontWeight="semibold" color="gray.600">
                      {city.city}
                    </Text>
                    <Text mt="2" color="gray.400">
                      {city.country}
                    </Text>
                  </Box>
                  <Image borderRadius="50%" />
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const continentsData = await api
    .get('/continent')
    .then((response) => response.data);

  const paths = continentsData.map((continent) => ({
    params: { region: continent.title },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { region } = context.params;

  const continentsData = await api
    .get('/continent')
    .then((response) => response.data);

  const actualContinentData = continentsData.find((continent) => {
    if (continent.title === region) return continent;
  });

  return {
    props: {
      continentData: actualContinentData,
    },
  };
};
