import {
  Badge,
  Box,
  Center,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const TimeSlot = ({ day, hour, place }) => {
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
            {day}
          </Heading>

          <Badge borderRadius="full" px="2" colorScheme={"teal"}>
            {"Disponible"}
          </Badge>

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {hour}
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
