import { HStack, Button, Center, VStack } from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";
import NotAutorized from "../../utils/NotAutorized";

const Chat = lazy(() => import("./Chat"));

function ChatList() {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Andres Sarmiento",
      speciality: "Matemáticas básicas",
      imageURL: "",
    },
    {
      id: 2,
      name: "Carlos Ramirez",
      speciality: "Plomeria",
      imageURL: "",
    },
    {
      id: 3,
      name: "Cesar Oviedo",
      speciality: "Instalaciones electricas",
      imageURL: "",
    },
    {
      id: 4,
      name: "Ricardo Montes",
      speciality: "Soporte y mantenimiento de computadores",
      imageURL: "",
    },
    {
      id: 5,
      name: "Andres Garcia",
      speciality: "Abogado",
      imageURL: "",
    },
  ]);
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const history = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user !== null) {
      fetch(`http://localhost:8000/chats/${user.name}`, {
        mode: "cors",
        method: "GET",
        headers: { Authorization: user.token },
      })
        .then((response) => response.json())
        .then((data) => setChats(data));
    }
  }, []);

  return (
    <Center my="6%">
      <VStack>
        {user ? (
          <HStack>
            <Suspense fallback={<h1>Loading...</h1>}>
              {chats &&
                chats.map((chat) => (
                  <Chat
                    key={chat._id}
                    id={chat._id}
                    name={
                      chat.userOne == user.name ? chat.userTwo : chat.userOne
                    }
                  />
                ))}
            </Suspense>
          </HStack>
        ) : (
          <NotAutorized />
        )}
        {user && (
          <Button
            bg={colorInteractiveElements}
            onClick={() => {
              history("/chat-add");
            }}
            color="white"
            _hover={{ bg: colorHover, color: "black" }}
          >
            Añadir
          </Button>
        )}
      </VStack>
    </Center>
  );
}

export default ChatList;
