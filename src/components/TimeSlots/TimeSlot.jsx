import {
  Badge,
  Box,
  Center,
  Heading,
  Text,
  useToast,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useUser } from "../../providers/UserProvider";
import { useNavigate, useParams } from "react-router-dom";

const TimeSlot = ({ date, hour, place, availability }) => {
  const indexForSplit = date.indexOf("T");
  const { user } = useUser();
  const { id } = useParams();
  const toast = useToast();
  const history = useNavigate();

  const handleBooking = async () => {
    const reqOps = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        advertisement: id.slice(1),
        user: user.name,
        place,
        date,
        hour,
      }),
    };
    await fetch(
      "https://bejewelled-khapse-d90703.netlify.app/api/Booking",
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

    await fetch("https://bejewelled-khapse-d90703.netlify.app/api/TimeSlots", {
      ...reqOps,
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Día: {date.substring(0, indexForSplit)}
          </Heading>
          <Text fontSize={"2xl"} fontFamily={"body"}>
            Hora: {date.substring(indexForSplit + 1, date.length)}
          </Text>
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={availability ? "teal" : "red"}
          >
            {availability ? "Disponible" : "Ocupado"}
          </Badge>

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Tiempo: {hour} horas
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            as="b"
          >
            Lugar:
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {place}
          </Text>
          {availability && <Button onClick={handleBooking}>Reservar</Button>}
        </Box>
      </Center>
    </>
  );
};

export default TimeSlot;
