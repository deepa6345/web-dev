import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../testing/about";
import Services from "../testing/Services";
import Theme from "../testing/Theme";
import Navbar from "../Navbar/Index";
 
import Login from "../testing/Login";
import Signup from "../testing/Signup";

export default function Navigation() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

