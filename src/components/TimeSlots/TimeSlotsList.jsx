import { HStack, Button, Center } from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TimeSlot = lazy(() => import("./TimeSlot"));

function TimeSlotsList() {
  const [timeSlots, setTimeSlots] = useState([]);
  const { id } = useParams();

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
    <Center>
      <HStack>
        <Suspense fallback={<h1>Loading...</h1>}>
          {timeSlots.length !== 0 ? (
            timeSlots.map((timeSlots) => (
              <TimeSlot
                key={timeSlots.id}
                place={timeSlots.place}
                day={timeSlots.day}
                hour={timeSlots.hour}
              />
            ))
          ) : (
            <h1>Not timeSlots found</h1>
          )}
        </Suspense>
      </HStack>
    </Center>
  );
}

export default TimeSlotsList;
