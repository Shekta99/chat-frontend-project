import { HStack, Button, Center } from "@chakra-ui/react";
import { lazy, useState, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

const Booking = lazy(() => import("./Booking"));

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  const history = useNavigate();

  const colorInteractiveElements = "#88D317";
  const colorHover = "#88D317";

  useEffect(() => {
    fetch("https://bejewelled-khapse-d90703.netlify.app/api/Booking", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data.bookings);
      });
  }, []);

  return (
    <Center>
      <HStack>
        <Suspense fallback={<h1>Loading...</h1>}>
          {bookings.length !== 0 ? (
            bookings.map((booking) => (
              <Booking
                key={booking._id}
                place={booking.place}
                date={booking.date}
                hour={booking.hour}
              />
            ))
          ) : (
            <h1>No se encontraron reservas</h1>
          )}
        </Suspense>
      </HStack>
    </Center>
  );
}

export default BookingList;
