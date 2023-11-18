import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Testimonials from "../assets/Testimonials.json";
import fondo from "../assets/fondoMenu.jpeg";

function TestimonialsPage() {
  return (
    <>
      <Box
        backgroundColor="#DCD0C0"
        backgroundImage={fondo}
        backgroundSize="cover"
        color="#535353"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Heading color="#F4F4F4" mt="2%" size="4xl">
          Nuestra Comunidad
        </Heading>
        <Box
          p="2%"
          borderRadius="10px"
          width="50%"
          my="2%"
          backgroundColor="#F4F4F4BC"
        >
          <Text fontSize="lg" as="em">
            Conoce los testimonios de nuestra comunidad.
          </Text>
        </Box>
      </Box>
      <Box
        justifyContent={"center"}
        textAlign="center"
        backgroundColor={"#F4F4F4"}
        maxW={"80%"}
        margin={"auto"}
        mt="2%"
        borderRadius="md"
        padding="5%"
        color={"#535353"}
      >
        <Heading size="xl">Testimonios</Heading>

        {Testimonials[0].map((item) => (
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            marginY="5%"
            key={item.name}
            width="80%"
            marginX="auto"
            borderRadius="5px"
            border="1px solid gray"
            padding="3%"
          >
            <Box textAlign="left" px="3%">
              <Heading size="sm">{item.name}</Heading>
              <Text>{item.description}</Text>
            </Box>
            <Box color="#5F6F52">
              <Text fontSize="3xl">{item.price}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
}

export default TestimonialsPage;
