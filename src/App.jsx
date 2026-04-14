import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ServicePage from "./Pages/servicePage";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/whatsApp";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<Project />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
