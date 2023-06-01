import { HStack, Button, Center } from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

const TimeSlot = lazy(() => import("./TimeSlot"));

function TimeSlotsList() {
  const [timeSlots, setTimeSlots] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  const history = useNavigate();

  const colorInteractiveElements = "#88D317";
  const colorHover = "#88D317";

  useEffect(() => {
    fetch("https://bejewelled-khapse-d90703.netlify.app/api/TimeSlots", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ advertisement: id }),
    })
      .then((response) => response.json())
      .then((data) => setTimeSlots(data.timeSlots));
  }, []);

  return (
    <Center my="6%">
      <HStack>
        <Suspense fallback={<h1>Loading...</h1>}>
          {timeSlots.length !== 0 ? (
            timeSlots.map((timeSlots) => (
              <TimeSlot
                key={timeSlots._id}
                place={timeSlots.place}
                date={timeSlots.date}
                hour={timeSlots.hour}
                availability={timeSlots.availability}
              />
            ))
          ) : (
            <h1>No se encontraron horarios</h1>
          )}
          {user.rol === "admin" && (
            <Button
              bg={colorInteractiveElements}
              onClick={() => {
                history(`/time-slots-add/:${id}`);
              }}
              color="white"
              _hover={{ bg: colorHover, color: "black" }}
            >
              Añadir horario
            </Button>
          )}
        </Suspense>
      </HStack>
    </Center>
  );
}

export default TimeSlotsList;
