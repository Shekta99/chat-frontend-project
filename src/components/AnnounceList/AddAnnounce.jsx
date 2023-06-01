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

function AddAnnounce() {
  const toast = useToast();
  const history = useNavigate();
  const colorInteractiveElements = "#6E3667";
  const colorHover = "#88D317";
  const colorBackground = "#88D317";
  const colorBackgroundInputs = "white";
  const colorText = "#6E3667";
  const [name, setName] = useState("");
  const [speciality, setSpec] = useState("");
  const [imageURL, setImg] = useState("");

  const handleSubmit = async () => {
    const reqOps = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, speciality, imageURL, availability: true }),
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
      onCloseComplete: () => history("/advertisements-list"),
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
            <Heading size="lg">Crear anuncio</Heading>
            <Box w="100%">
              <Text>Nombre:</Text>
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

            <Box w="100%">
              <Text>Especialidad:</Text>
              <InputGroup>
                <InputLeftElement
                  children={
                    <ChevronRightIcon color={colorInteractiveElements} />
                  }
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="Comida mexicana"
                  borderColor="black"
                  onChange={(e) => setSpec(e.target.value)}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>
            <Box w="100%">
              <Text>Imagen Url:</Text>
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
                Añadir
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}

export default AddAnnounce;
