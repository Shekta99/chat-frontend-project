import { ChatIcon, AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
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
  useToast,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddTimeSlot = () => {
  const toast = useToast();
  const history = useNavigate();
  const colorInteractiveElements = "#6E3667";
  const colorHover = "blue.300";
  const colorBackground = "#88D317";
  const colorBackgroundInputs = "white";
  const colorText = "#6E3667";
  const { id } = useParams();

  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHours] = useState(0);

  const handleSubmit = async () => {
    const reqOps = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        advertisement: id.slice(1),
        place,
        date,
        hour,
        availability: true,
      }),
    };
    await fetch(
      "https://bejewelled-khapse-d90703.netlify.app/api/TimeSlots",
      reqOps
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    toast({
      title: "TimeSlot Created",
      description: "We've created the time slot",
      status: "success",
      duration: 9000,
      isClosable: true,
      onCloseComplete: () => history(-1),
    });
  };

  return (
    <div>
      <Box
        maxW="sm"
        marginX="auto"
        marginY="2%"
        bg={colorBackground}
        borderRadius="xl"
        p={5}
      >
        <Center>
          <VStack spacing={8}>
            <Heading size="lg" color="#6E3667">
              Add Parking
            </Heading>
            <Box w="100%">
              <Text>Lugar:</Text>
              <InputGroup>
                <InputLeftElement>
                  <ChatIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="A1"
                  borderColor="black"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>

            <Box w="100%">
              <Text>Fecha:</Text>
              <InputGroup>
                <InputLeftElement>
                  <ChevronRightIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  borderColor="black"
                  type="datetime-local"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>

            <Box w="100%">
              <Text>Numero de Horas:</Text>

              <Select
                color={colorText}
                borderColor="black"
                bg={colorBackgroundInputs}
                onChangeCapture={(e) => {
                  setHours(Number(e.target.value));
                }}
                _hover={{ borderColor: colorHover }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Select>
            </Box>

            <HStack spacing={4}>
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
};

export default AddTimeSlot;
