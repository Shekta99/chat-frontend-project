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
          <Heading mb="4%">Safe Surfer</Heading>
          <Box width="90%">
            <Text mb="2%">
              Presentamos nuestra innovadora aplicación de chat encriptado,
              diseñada con un enfoque implacable en tu privacidad y seguridad en
              línea. Nuestra aplicación te permite comunicarte de manera segura
              con tus amigos, colegas y seres queridos, gracias a la
              encriptación que protege tus conversaciones de miradas no
              deseadas. Ya no tienes que preocuparte por posibles intrusiones en
              tus mensajes. Con una interfaz intuitiva y funciones fáciles de
              usar, proporcionamos la solución perfecta para mantener tus
              comunicaciones seguras y confidenciales. Descubre la tranquilidad
              que brinda nuestra aplicación de chat encriptado y únete a la
              comunidad de usuarios que valoran la privacidad en línea.
            </Text>
            <Text>
              ¡No tomes solo nuestra palabra, escucha lo que nuestros clientes
              tienen que decir sobre nuestra aplicación de chat encriptado!
            </Text>
            <Button
              marginY="3%"
              backgroundColor="#F9EBC7"
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
          <Image
            borderRadius="5px"
            alt="Don jose"
            src={"https://cdn-icons-png.flaticon.com/512/6772/6772234.png"}
          />
        </Box>
      </Flex>
    </>
  );
}

export default AboutPage;
