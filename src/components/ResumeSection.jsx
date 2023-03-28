import { Box, Heading, Text } from "@chakra-ui/react";

function ResumeSection() {
  return (
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
      <Heading mb="2%" size="xl">
        Booking App
      </Heading>

      <Text fontSize="lg" as="em">
        Bienvenidos a nuestra aplicación de consultorías virtuales, donde
        ofrecemos servicios de asesoramiento personalizado en línea. Contamos
        con un equipo de expertos en diferentes áreas y que se enfocan en
        brindar soluciones efectivas y eficientes a las necesidades de nuestros
        clientes. Nuestra plataforma ofrece una experiencia sencilla y accesible
        para conectarte con nuestros consultores, lo que te permite obtener
        respuestas a tus preguntas desde cualquier lugar y en cualquier momento.
        Confía en nosotros para ayudarte a alcanzar tus metas y superar tus
        desafíos. ¡Únete a nuestra comunidad hoy mismo!
      </Text>
    </Box>
  );
}

export default ResumeSection;
