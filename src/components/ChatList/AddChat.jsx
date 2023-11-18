import {
  ChatIcon,
  AddIcon,
  LinkIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
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
  useColorModeValue,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

function AddChat() {
  const toast = useToast();
  const history = useNavigate();
  const colorInteractiveElements = "#5F6F52";
  const colorHover = "#F9EBC7";
  const colorBackground = "#F9EBC7";
  const colorBackgroundInputs = "white";
  const colorText = "#5F6F52";
  const [name, setName] = useState("");
  const { user } = useUser();

  const handleSubmit = async () => {
    const reqOps = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({ userOne: user.name, userTwo: name }),
    };
    await fetch(`http://localhost:8000/chats/`, reqOps)
      .then((response) => response.json())
      .then((data) => {});
    toast({
      title: "Chat Created",
      description: "We've created the Chat",
      status: "success",
      duration: 9000,
      isClosable: true,
      onCloseComplete: () => history(`/chat-list`),
    });
  };

  return (
    <div>
      <Box
        maxW="sm"
        marginX="auto"
        bg={colorBackground}
        borderRadius="xl"
        p={5}
      >
        <Center>
          <VStack spacing={8}>
            <Heading size="lg">Crear chat</Heading>
            <Box w="100%">
              <Text>Nombre Destinatario:</Text>
              <InputGroup>
                <InputLeftElement>
                  <ChatIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="Andres"
                  borderColor="black"
                  onChange={(e) => setName(e.target.value)}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>

            <HStack spacing={14}>
              <Button
                bg={colorInteractiveElements}
                color="white"
                leftIcon={<AddIcon color={colorHover} />}
                _hover={{ bg: colorHover, color: "black" }}
                onClick={handleSubmit}
              >
                Añadir
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}

export default AddChat;
