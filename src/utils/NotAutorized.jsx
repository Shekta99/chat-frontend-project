import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotAutorized = () => {
  const history = useNavigate();
  return (
    <Center
      color="#6E3667"
      backgroundColor="#88D317"
      width="100%"
      my="35%"
      mx="auto"
      borderRadius="5px"
      padding="2%"
    >
      <VStack>
        <Heading>No estas autorizado</Heading>
        <Button
          onClick={() => {
            history("/login");
          }}
        >
          Iniciar Sesión
        </Button>
      </VStack>
    </Center>
  );
};

export default NotAutorized;
