import {
  GridItem,
  Grid,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";

function Footer() {
  const socials = [
    { icon: <SlSocialInstagram />, name: "Instagram" },
    { icon: <SlSocialTwitter />, name: "Twitter" },
    { icon: <SlSocialFacebook />, name: "Facebook" },
  ];
  return (
    <Grid
      fontSize="xl"
      backgroundColor={"#5F6F52"}
      justifyContent="center"
      color={"#F4F4F4"}
      templateColumns="repeat(3, 1fr)"
      paddingX="4%"
      py="2%"
      marginTop="5%"
    >
      <GridItem color="#F4F4F4">
        <Text as="b" mb="5%">
          Sites
        </Text>
        <UnorderedList>
          <ListItem>
            <Link href="/about-us">Conocenos</Link>
          </ListItem>
          <ListItem>
            <Link href="/testimonials">Testimonios</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact">Contacto</Link>
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem>
        <Text as="b">Social</Text>
        {socials.map((social) => (
          <Flex marginY="2%">
            <Link>
              <Flex>
                <Box>{social.icon}</Box>
                <Box marginLeft="15%">{social.name}</Box>
              </Flex>
            </Link>
          </Flex>
        ))}
      </GridItem>
      <GridItem alignSelf={"end"}>
        <Text>© 2023 — All rights reserved.</Text>
      </GridItem>
    </Grid>
  );
}

export default Footer;
