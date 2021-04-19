import Link from 'next/link';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller, Navigation, Pagination } from 'swiper';
import Header from '../components/Header';

SwiperCore.use([Controller, Pagination, Navigation]);

export default function Home() {
  return (
    <>
      <Header />
      <Box
        w="100%"
        bgSize="cover"
        bgImage="url('/background-index.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb={12}
      >
        <Container maxWidth={1280}>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={[0, 0, 0, 2]}>
            <Box pt={20} pb={16}>
              <Heading as="h1" color="gray.50" fontWeight="medium" size="xl">
                6 continentes, <br />
                infinitas possibilidades.
              </Heading>
              <Text mt={4} color="gray.300" fontWeight="normal">
                Chegou a hora de tirar do papel a viagem que você <br />
                sempre sonhou.
              </Text>
            </Box>
            <Box position="relative" display={{ base: 'none', lg: 'block' }}>
              <Image
                draggable="false"
                position="absolute"
                right="0"
                src="/icons/airplane.svg"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container pt={8} maxWidth={1280}>
        <SimpleGrid minChildWidth="120px" spacing={8}>
          <Flex align="center" justify="center" direction="column">
            <Image mb={6} src="/icons/nightlife.svg" />
            <Text fontWeight="semibold">Vida noturna</Text>
          </Flex>
          <Flex align="center" justify="center" direction="column">
            <Image mb={6} src="/icons/beach.svg" />
            <Text fontWeight="semibold">Praia</Text>
          </Flex>
          <Flex align="center" justify="center" direction="column">
            <Image mb={6} src="/icons/modern.svg" />
            <Text fontWeight="semibold">Moderno</Text>
          </Flex>
          <Flex align="center" justify="center" direction="column">
            <Image mb={6} src="/icons/classic.svg" />
            <Text fontWeight="semibold">Clássico</Text>
          </Flex>
          <Flex align="center" justify="center" direction="column">
            <Image mb={6} src="/icons/more.svg" />
            <Text fontWeight="semibold">e mais...</Text>
          </Flex>
        </SimpleGrid>

        <Center height="150px">
          <Divider
            border="2px solid"
            borderRadius="8"
            w="100px"
            borderColor="darkTextAndHeadingColor"
          />
        </Center>

        <Center>
          <Heading as="h2" textAlign="center" color="gray.600">
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
        </Center>
      </Container>

      <Container mt={8} mb={12} maxWidth={1280}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/africa.jpg"
              alt="Africa"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                Africa
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                O continente africano é um dos que possuem a maior quantidade de
                etnias em todo o planeta.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/africa">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/asia.jpg"
              alt="Asia"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                Asia
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                A Ásia tem 50 países de culturas e gastronomias diferentes.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/asia">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/europe.jpg"
              alt="Europe"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                Europe
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                Pela proximidade dos países neste continente, é possível
                conhecer mais de um na mesma viagem e render ainda mais sua
                estadia.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/europe">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/northAmerica.jpg"
              alt="North America"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                North America
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                O bom da América do Norte é poder ter um pouquinho de tudo. Dá
                para curtir as praias de Cancún, as estações de esqui do Canadá,
                o visual do Grand Cânion entre outros.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/northAmerica">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/oceania.jpg"
              alt="Oceania"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                Oceania
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                A região tem 9 milhões de km² de paisagens paradisíacas,
                tradições de civilizações aborígenes e cultura europeia, e
                cidades cheias de atrativos.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/oceania">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              filter="brightness(0.6)"
              src="/continents/southAmerica.jpg"
              alt="South America"
            />
            <Box
              position="absolute"
              top="50%"
              width="50%"
              color="lightTextAndHeadingColor"
              px={8}
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              align="center"
            >
              <Heading fontSize={{ base: '1rem', lg: '3rem' }} mb={4}>
                South America
              </Heading>
              <Text display={{ base: 'none', lg: 'block' }}>
                Que tal começar a olhar para América do Sul, que apresenta uma
                excepcional riqueza de praias, montanhas, desertos, atrações
                históricas e belezas naturais de fazer inveja.
              </Text>
              <Button
                mx="auto"
                my={4}
                background="highlightColor"
                _hover={{ bgColor: '#222' }}
                colorScheme="teal"
                variant="solid"
              >
                <Link href="/continents/southAmerica">
                  <a>Saiba Mais</a>
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
