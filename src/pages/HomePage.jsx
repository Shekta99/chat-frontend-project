import { Heading, Text, Box, Button, Grid, GridItem } from "@chakra-ui/react";
import ResumeSection from "../components/ResumeSection";
import fondo from "../assets/fondoHome.jpg";
import { Image } from "@chakra-ui/react";

function HomePage({ title }) {
  const images = [
    {
      src: "https://hectoraguilarcoach.com/wp-content/uploads/2020/05/image0-1.png",
      alt: "amigo",
    },
    {
      src: "https://www.etapainfantil.com/wp-content/uploads/2016/07/Vinculo-familiar-800x533.jpg.webp",
      alt: "familiar",
    },
    {
      src: "https://static.diariofemenino.com/uploads/amor/217288-liarte-compi.jpg",
      alt: "compañero",
    },
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
            Chatea con quien quieras!
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
