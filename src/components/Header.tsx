import React from 'react';
import { Flex, Image, Container, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <Container maxWidth={1280}>
      <Flex align="center" justify="center">
        {router.asPath !== '/' && (
          <Link href="/">
            <a style={{ marginRight: 'auto' }}>
              <RiArrowLeftSLine size="2rem" />
            </a>
          </Link>
        )}
        <Link href="/">
          <a style={{ marginRight: `${router.asPath !== '/' ? 'auto' : ''}` }}>
            <Image py={4} src="/icons/logo.svg" />
          </a>
        </Link>
      </Flex>
    </Container>
  );
}
