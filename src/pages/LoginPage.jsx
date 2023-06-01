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

import sha1 from "crypto-js/sha1";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const { setUser } = useUser();
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);
  const colorShowIcon = "gray.500";
  const colorInteractiveElements = "#6E3667";
  const colorHover = "blue.300";
  const colorBackground = "#88D317";
  const colorBackgroundInputs = "white";
  const colorText = "#6E3667";
  const toast = useToast();

  const history = useNavigate();

  const handleSignIn = async () => {
    const hashedPassword = sha1(password, "123").toString();
    const reqOps = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password: hashedPassword }),
      mode: "cors",
    };
    await fetch("http://localhost:8888/.netlify/functions/Auth", reqOps)
      .then((response) => response.json())
      .then((data) => {
        if (data.user.length === 0) {
          toast({
            title: "Credentials",
            description: "Incorrect credentials",
            status: "error",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => history("/login"),
          });
        } else {
          setUser({ name: data.user[0].name, rol: data.user[0].rol });
          toast({
            title: "Logged in",
            description: "Correct credentials",
            status: "success",
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => history("/advertisements-list"),
          });
        }
      });
  };

  const handleRegister = async () => {
    const hashedPassword = sha1(password, "123").toString();
    const reqOps = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password: hashedPassword, rol: "user" }),
    };
    await fetch("http://localhost:8888/.netlify/functions/Auth", reqOps)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    toast({
      title: "User Created",
      description: "We've created the User",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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
