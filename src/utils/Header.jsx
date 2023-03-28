import { Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { HStack } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      fontSize="3xl"
      backgroundColor={"#6E3667"}
      justifyContent="space-around"
      color={"#88D317"}
    >
      <Link href="/">
        <HStack>
          <Image
            src={logo}
            alt="Logo de tu empresa"
            width="100px"
            marginx="2%"
            padding={0}
          />
          <Text as="b">Booking App</Text>
        </HStack>
      </Link>
      <Flex justifyContent="space-between" width="50%" mt="1%">
        <Link href="/about-us" margin="2%">
          Conocenos
        </Link>
        <Link href="/testimonials" margin="2%">
          Testimonios
        </Link>
        <Link href="/contact" margin="2%">
          Contacto
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
