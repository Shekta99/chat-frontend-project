import HomePage from "./pages/HomePage";
import Header from "./utils/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./utils/Footer";
import AboutPage from "./pages/AboutPage";
import AnnounceList from "./components/AnnounceList/AnnounceList";
import AddAnnounce from "./components/AnnounceList/AddAnnounce";
import TimeSlotsList from "./components/TimeSlots/TimeSlotsList";
import AddTimeSlot from "./components/TimeSlots/AddTimeSlot";
import LoginPage from "./pages/LoginPage";
import BookingList from "./components/Bookings/BookingList";

const homeData = {
  title: "Bienvenidos",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                title={homeData.title}
                description={homeData.description}
              />
            }
          />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/advertisements-list" element={<AnnounceList />} />
          <Route path="/announce-add" element={<AddAnnounce />} />
          <Route path="/time-slot/:id" element={<TimeSlotsList />} />
          <Route path="/time-slots-add/:id" element={<AddTimeSlot />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
