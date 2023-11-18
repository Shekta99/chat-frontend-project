import {
  HStack,
  Button,
  Center,
  Input,
  VStack,
  useToast,
  Box,
} from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";
import CryptoJS from "crypto-js";

const Message = lazy(() => import("./Message"));

function MessageList() {
  const [Messages, setMessages] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const history = useNavigate();
  const colorShowIcon = "gray.500";
  const colorBackground = "#F9EBC7";
  const colorBackgroundInputs = "white";
  const colorText = "#5F6F52";
  const colorInteractiveElements = "#F9EBC7";
  const colorHover = "#F9EBC7";
  const toast = useToast();

  useEffect(() => {
    fetch(`http://localhost:8000/messages/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  const handleSend = async () => {
    const hashedMessage = CryptoJS.AES.encrypt(message, "password").toString();
    const reqOps = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({
        body: hashedMessage,
        user: user.name,
        chat: id,
      }),
      mode: "cors",
    };
    await fetch("http://localhost:8000/messages", reqOps)
      .then((response) => response.json())
      .then((data) => {
        toast({
          title: "Message Send",
          description: "We've created the User",
          status: "success",
          duration: 9000,
          isClosable: true,
          onCloseComplete: () => window.location.reload(),
        });
      });
  };

  return (
    <Center my="6%">
      <VStack>
        <Box w="800px">
          <Suspense fallback={<h1>Loading...</h1>}>
            {Messages.length !== 0 ? (
              Messages.map((message) => (
                <Message
                  key={message._id}
                  body={message.body}
                  align={user.name == message.user ? "right" : "left"}
                />
              ))
            ) : (
              <h1>No se encontraron mensajes</h1>
            )}
          </Suspense>
        </Box>
        <HStack>
          <Input
            color={colorText}
            bg={colorBackgroundInputs}
            placeholder="Nuevo mensaje"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            _hover={{ bg: colorHover, color: "black" }}
            onClick={() => {
              handleSend();
            }}
          >
            Enviar
          </Button>
          <Button
            _hover={{ bg: colorHover, color: "black" }}
            onClick={() => {
              history("/chat-list");
            }}
          >
            Salir
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}

export default MessageList;
