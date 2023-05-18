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
import fondo from "../img/fondo.jpg";

function AddRestaurant() {
  const toast = useToast();
  const history = useNavigate();
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const { toggleColorMode } = useColorMode();
  const colorBackground = useColorModeValue("gray.300", "gray.700");
  const colorBackgroundInputs = useColorModeValue("white", "gray.500");
  const colorText = useColorModeValue("black", "white");
  const [name, setName] = useState("");
  const [speciality, setSpec] = useState("");
  const [imageURL, setImg] = useState("");

  const handleSubmit = async () => {
    const reqOps = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, speciality, imageURL }),
    };
    await fetch(
      "https://bejewelled-khapse-d90703.netlify.app/api/Advertisement",
      reqOps
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    toast({
      title: "Advertisement Created",
      description: "We've created the Advertisement",
      status: "success",
      duration: 9000,
      isClosable: true,
      onCloseComplete: () => history("/advertisement-list"),
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        height: "100vh",
        width: "100%",
        margin: 0,
        backgroundSize: "cover",
      }}
    >
      <Box
        maxW="sm"
        marginX="auto"
        bg={colorBackground}
        borderRadius="xl"
        p={5}
      >
        <Center>
          <VStack spacing={8}>
            <Heading size="lg">AddRestaurant</Heading>
            <Box w="100%">
              <Text>Name:</Text>
              <InputGroup>
                <InputLeftElement>
                  <ChatIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="Mexican Tour"
                  borderColor="black"
                  onChange={(e) => setName(e.target.value)}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>

            <Box w="100%">
              <Text>Speciality:</Text>
              <InputGroup>
                <InputLeftElement
                  children={
                    <ChevronRightIcon color={colorInteractiveElements} />
                  }
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="Mexican food"
                  borderColor="black"
                  onChange={(e) => setSpec(e.target.value)}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>
            <Box w="100%">
              <Text>Image Url:</Text>
              <InputGroup>
                <InputLeftElement
                  children={<LinkIcon color={colorInteractiveElements} />}
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="url.com"
                  borderColor="black"
                  onChange={(e) => setImg(e.target.value)}
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
                Add
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}

export default AddRestaurant;
