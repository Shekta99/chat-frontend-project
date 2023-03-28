import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import restaurant from "../assets/about.jpg";

function AboutPage() {
  return (
    <>
      <Flex m="2%" columnGap="2%">
        <Box
          textAlign="left"
          backgroundColor={"#F4F4F4"}
          maxW={"60%"}
          borderRadius="md"
          padding="5%"
          color={"#535353"}
        >
          <Heading mb="4%">Booking App</Heading>
          <Box width="90%">
            <Text mb="2%">
              Nuestros clientes han quedado impresionados con la calidad y
              eficacia de nuestros servicios de consultorías virtuales. Desde la
              comodidad de su hogar, han podido conectarse con nuestros expertos
              y recibir asesoramiento personalizado en una amplia variedad de
              temas. Muchos de ellos han expresado su gratitud por haber
              encontrado una solución fácil y accesible para resolver sus
              problemas y alcanzar sus metas.
            </Text>
            <Text>
              ¡No tomes solo nuestra palabra, escucha lo que nuestros clientes
              tienen que decir sobre nuestra aplicación de consultorías
              virtuales!
            </Text>
            <Button
              marginY="3%"
              backgroundColor="#88D317"
              color="#535353"
              onClick={() => {
                window.location.assign("/testimonials");
              }}
            >
              Testimonios
            </Button>
          </Box>
        </Box>
        <Box my="auto">
          <Image borderRadius="5px" alt="Don jose" src={restaurant} />
        </Box>
      </Flex>
    </>
  );
}

export default AboutPage;
