import HomePage from "./pages/HomePage";
import Header from "./utils/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import Footer from "./utils/Footer";
import AboutPage from "./pages/AboutPage";
import ChatList from "./components/ChatList/ChatList";
import AddChat from "./components/ChatList/AddChat";
import LoginPage from "./pages/LoginPage";
import MessageList from "./components/Messages/MessageList";
import RegisterPage from "./pages/RegisterPage";

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
          <Route path="/chat-list" element={<ChatList />} />
          <Route path="/chat-add" element={<AddChat />} />
          <Route path="/chat/:id" element={<MessageList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
