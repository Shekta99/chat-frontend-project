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
        Safe Surfer
      </Heading>

      <Text fontSize="lg" as="em">
        ¡Conversaciones seguras y privadas al alcance de tu mano! Descubre la
        revolución en la privacidad en línea con nuestra aplicación de chat
        encriptado. Comunícate con confianza y mantén tus conversaciones lejos
        de miradas indiscretas. ¡Únete a nosotros ahora!
      </Text>
    </Box>
  );
}

export default ResumeSection;
