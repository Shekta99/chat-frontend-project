import {
  Badge,
  Box,
  Center,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const TimeSlot = ({ date, hour, place }) => {
  const indexForSplit = date.indexOf("T");
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
        </Box>
      </Center>
    </>
  );
};

export default TimeSlot;
