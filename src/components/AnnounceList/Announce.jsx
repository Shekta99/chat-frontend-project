import {
  Badge,
  Box,
  Center,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Announce = ({ name, speciality, imageUrl, availability, id }) => {
  const history = useNavigate();
  const HandleClick = () => {
    history(`/time-slot/${id}`);
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
          <Image
            size="2xl"
            width="200px"
            src={imageUrl}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          {availability ? (
            <Badge borderRadius="full" px="2" colorScheme={"teal"}>
              {"Disponible"}
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme={"red"}>
              {"Ocupado"}
            </Badge>
          )}
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {speciality.toString()}
          </Text>
          <Button onClick={HandleClick}>Reservar</Button>
        </Box>
      </Center>
    </>
  );
};

export default Announce;
