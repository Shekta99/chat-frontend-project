import HomePage from "./pages/HomePage";
import Header from "./utils/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./utils/Footer";
import AboutPage from "./pages/AboutPage";
import AnnounceList from "./components/AnnounceList/AnnounceList";
import AddAnnounce from "./components/AnnounceList/AddAnnounce";

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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
