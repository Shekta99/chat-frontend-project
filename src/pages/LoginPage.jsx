import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  Input,
  VStack,
  InputLeftElement,
  HStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import { decodeToken } from "react-jwt";
import CryptoJS from "crypto-js";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const { setUser } = useUser();
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);
  const colorShowIcon = "gray.500";
  const colorInteractiveElements = "#5F6F52";
  const colorHover = "blue.300";
  const colorBackground = "#F9EBC7";
  const colorBackgroundInputs = "white";
  const colorText = "#5F6F52";
  const toast = useToast();

  const history = useNavigate();

  const handleSignIn = async () => {
    const hashedPassword = CryptoJS.AES.encrypt(
      password,
      "password"
    ).toString();
    const reqOps = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email: name, password: hashedPassword }),
      mode: "cors",
    };
    await fetch("http://localhost:8000/login/auth", reqOps)
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) {
          toast({
            title: "Credentials",
            description: "Incorrect credentials",
            status: "error",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => history("/login"),
          });
        } else {
          const decodedToken = decodeToken(data.token);
          setUser({
            name: decodedToken.name,
            rol: decodedToken.rol,
            token: data.token,
          });
          toast({
            title: "Logged in",
            description: "Correct credentials",
            status: "success",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => history("/chat-list"),
          });
        }
      });
  };

  const handleRegister = async () => {
    history("/register");
  };

  return (
    <div>
      <Box
        maxW="sm"
        marginX="auto"
        marginY="80px"
        bg={colorBackground}
        borderRadius="xl"
        color={colorText}
        p={5}
      >
        <Center>
          <VStack spacing={8}>
            <Heading size="lg">Login</Heading>
            <Box w="100%">
              <Text>Email:</Text>
              <InputGroup>
                <InputLeftElement>
                  <EmailIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="email@email.com"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputGroup>
            </Box>

            <Box w="100%">
              <Text>Password:</Text>
              <InputGroup>
                <InputLeftElement>
                  <LockIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="password"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <InputRightElement onClick={handleClick}>
                  {show ? (
                    <ViewOffIcon color={colorShowIcon} />
                  ) : (
                    <ViewIcon color={colorShowIcon} />
                  )}
                </InputRightElement>
              </InputGroup>
            </Box>
            <HStack spacing={14}>
              <Button
                bg={colorInteractiveElements}
                color="white"
                _hover={{ bg: colorHover, color: "black" }}
                onClick={() => {
                  handleSignIn();
                }}
              >
                Sign-in
              </Button>
              <Button
                bg={colorInteractiveElements}
                color="white"
                _hover={{ bg: colorHover, color: "black" }}
                onClick={() => {
                  handleRegister();
                }}
              >
                Register
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </div>
  );
};

export default LoginPage;
