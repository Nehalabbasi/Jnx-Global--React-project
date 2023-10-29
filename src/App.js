import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Whyus from "./components/Whyus";
import Standard from "./components/Standard";
import Home2 from "./pages/Home2";
import Ourmission from "./pages/OurMission";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Whyus' element={<Whyus />} />
        <Route path='/Standard' element={<Standard />} />
        <Route path='/Ourmission' element={<Ourmission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
