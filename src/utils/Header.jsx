import { Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import {
  HStack,
  Menu,
  MenuItem,
  MenuButton,
  Avatar,
  MenuList,
} from "@chakra-ui/react";
import { useUser } from "../providers/UserProvider";

function Header() {
  const { user, setUser } = useUser();
  const handleLogOut = () => {
    window.location.href = "/login";
    setUser(null);
  };
  return (
    <Flex
      fontSize="3xl"
      backgroundColor={"#5F6F52"}
      justifyContent="space-around"
      color={"#F9EBC7"}
    >
      <Link href="/">
        <HStack>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6772/6772234.png"
            alt="Logo de tu empresa"
            width="100px"
            marginx="2%"
            padding={0}
          />
          <Text as="b">Safe Surfer</Text>
        </HStack>
      </Link>
      <Flex justifyContent="space-between" width="50%" mt="1%">
        <Link href="/about-us" margin="2%">
          Conocenos
        </Link>
        <Link href="/testimonials" margin="2%">
          Testimonios
        </Link>
        <Link href="/chat-list" margin="2%">
          Chats
        </Link>

        <Menu>
          <MenuButton as={Avatar}> </MenuButton>
          <MenuList color="black">
            {user && user.rol === "admin" ? (
              <MenuItem>
                <Link href="/bookings">Reservas</Link>
              </MenuItem>
            ) : null}
            {user ? (
              <MenuItem onClick={handleLogOut}>Cerrar Sesión</MenuItem>
            ) : (
              <MenuItem>
                <Link href="/login">Iniciar Sesión</Link>
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Header;
