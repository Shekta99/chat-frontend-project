import { HStack, Button, Center, VStack } from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";
import NotAutorized from "../../utils/NotAutorized";

const Announce = lazy(() => import("./Announce"));

function AnnounceList() {
  const [advertisement, setAdvertisements] = useState([
    {
      id: 1,
      name: "Andres Sarmiento",
      speciality: "Matemáticas básicas",
      imageURL: "",
    },
    {
      id: 2,
      name: "Carlos Ramirez",
      speciality: "Plomeria",
      imageURL: "",
    },
    {
      id: 3,
      name: "Cesar Oviedo",
      speciality: "Instalaciones electricas",
      imageURL: "",
    },
    {
      id: 4,
      name: "Ricardo Montes",
      speciality: "Soporte y mantenimiento de computadores",
      imageURL: "",
    },
    {
      id: 5,
      name: "Andres Garcia",
      speciality: "Abogado",
      imageURL: "",
    },
  ]);
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const history = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    fetch("https://bejewelled-khapse-d90703.netlify.app/api/Advertisement", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAdvertisements(data.advertisements));
  }, []);

  return (
    <Center my="6%">
      <VStack>
        {user ? (
          <HStack>
            <Suspense fallback={<h1>Loading...</h1>}>
              {advertisement.map((advertisement) => (
                <Announce
                  key={advertisement._id}
                  id={advertisement._id}
                  name={advertisement.name}
                  speciality={advertisement.speciality}
                  imageUrl={advertisement.imageURL}
                  availability={advertisement.availability}
                />
              ))}
            </Suspense>
          </HStack>
        ) : (
          <NotAutorized />
        )}
        {user && user.rol == "admin" && (
          <Button
            bg={colorInteractiveElements}
            onClick={() => {
              history("/announce-add");
            }}
            color="white"
            _hover={{ bg: colorHover, color: "black" }}
          >
            Añadir
          </Button>
        )}
      </VStack>
    </Center>
  );
}

export default AnnounceList;
