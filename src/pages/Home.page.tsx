import { Center, Image } from '@mantine/core';

import logo from '../images/logo.jpg';

export function HomePage() {
  return (
    <>
      <Center>
        <Image src={logo} w="70vw" />
      </Center>
    </>
  );
}
