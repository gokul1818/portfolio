import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./App.css";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { FaArrowUp } from "react-icons/fa";

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
    <div className="min-h-screen  text-gray-900 text-white">
      {/* Sticky Navbar with Dynamic Background */}
      <nav className={`fixed md:block hidden  w-full p-4 z-50 transition-all duration-300 ${navbar ? " shadow-md bg-white/30 backdrop-blur-sm" : "bg-transparent"}`}>
        <div className={"flex justify-center space-x-6"}>
          <Link to="home" smooth={true} className="nav-link">Home</Link>
          <Link to="about" smooth={true} className="nav-link">About</Link>
          <Link to="projects" smooth={true} className="nav-link">Projects</Link>
          <Link to="contact" smooth={true} className="nav-link">Contact</Link>
        </div>
      </nav>

      {/* Page Sections */}
      <div className="pt-1 h-[100%] bg-linear-to-t from-gray-700 to-gray-700   ">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {navbar &&
        <div className="fixed bottom-4 right-4 bg-gray-800 p-2 rounded-xl shadow-lg cursor-pointer hover:bg-gray-700 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp />
        </div>
      }
    </div>

  );
};

export default App;
