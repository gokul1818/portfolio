import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./App.css";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};






const App = () => {
  const [navbar, setNavbar] = useState(false);

  // Change navbar background on scroll
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* Sticky Navbar with Dynamic Background */}
      <nav style={{}} className={`fixed  w-full p-4 z-50 transition-all duration-300 ${navbar ? " shadow-md bg-white/30 backdrop-blur-sm" : "bg-transparent"}`}>
        <div className={"flex justify-center space-x-6"}>
          <Link to="home" smooth={true} className="nav-link">Home</Link>
          <Link to="about" smooth={true} className="nav-link">About</Link>
          <Link to="projects" smooth={true} className="nav-link">Projects</Link>
          <Link to="contact" smooth={true} className="nav-link">Contact</Link>
        </div>
      </nav>

      {/* Page Sections */}
      <div className="pt-1 h-[100%] bg-linear-to-t from-cyan-200 to-blue-50   ">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div >
  );
};

export default App;
