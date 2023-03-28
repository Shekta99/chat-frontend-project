import { Heading, Text, Box, Button, Grid, GridItem } from "@chakra-ui/react";
import ResumeSection from "../components/ResumeSection";
import fondo from "../assets/fondoHome.jpg";
import abogado from "../assets/abogado.jpg";
import arquitectura from "../assets/arquitectura.jpg";
import developer from "../assets/developer.jpg";
import redes from "../assets/redes.jpg";
import medico from "../assets/doctor.jpg";
import artista from "../assets/artista.jpg";
import { Image } from "@chakra-ui/react";

function HomePage({ title }) {
  const images = [
    { src: abogado, alt: "abogado" },
    { src: arquitectura, alt: "arquitecto" },
    { src: developer, alt: "developer" },
    { src: redes, alt: "redes" },
    { src: medico, alt: "medico" },
    { src: artista, alt: "artista" },
  ];
  return (
    <>
      <Box
        className="fondo"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        backgroundImage={fondo}
        backgroundSize="cover"
      >
        <Heading
          color={"#F4F4F4"}
          marginBottom={"2%"}
          padding={"3%"}
          size="4xl"
        >
          {title}
        </Heading>
        <Button
          onClick={() => {
            window.location.assign("/testimonials");
          }}
          size="lg"
          marginBottom="2%"
          colorScheme="whiteAlpha"
        >
          Conoce nuestros usuarios
        </Button>
      </Box>
      <ResumeSection />
      <Grid
        templateColumns="repeat(3, 1fr)"
        textAlign="center"
        maxWidth="60%"
        margin="auto"
        gap="2%"
        border="1px solid gray"
        padding="3%"
        marginTop="2%"
        borderRadius="5px"
        backgroundColor="#F4F4F4"
        color="#535353"
      >
        <GridItem colSpan={3} mb="3%">
          <Text as="b" fontSize="3xl">
            Encuentra lo que necesitas!
          </Text>
        </GridItem>
        {images.map((image) => (
          <GridItem backgroundColor={"#DCD0C0"}>
            <Image
              border="1px solid gray"
              borderRadius="5px"
              src={image.src}
              alt={image.alt}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
