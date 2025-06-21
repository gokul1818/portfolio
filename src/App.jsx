import CryptoJS from "crypto-js";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import avatar from "./assets/avatar.png";
import ColorSparks from "./colorSpraks";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import NameRise2D from "./components/gokul-text";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import VoiceAssistant from "./components/voiceAssistant";

const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const IpToken = import.meta.env.VITE_TELEGRAM_IP_TOKEN;
const secretKey = import.meta.env.VITE_TELEGRAM_SECRET_KEY;
const apiIPToken = import.meta.env.VITE_TELEGRAM_APIIP_TOKEN;

const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [name, setName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const savedName = localStorage.getItem("visitor_name");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const changeNavbar = () => {
      setNavbar(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  const sendMessageWithLocation = async () => {
    if (!savedName) return;
    const encryptedPayload = encryptData({
      name: savedName,
      token: String(botToken),
      chat_Id: chatId,
      ipToken: IpToken,
      apiIPToken: apiIPToken,
    });
    await fetch(
      "https://my-portfolio-express-server.onrender.com/api/fetch-data",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: encryptedPayload }),
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem("visitor_name", name.trim());
    setShowPrompt(false);
  };

  useEffect(() => {
    if (savedName) {
      setName(savedName);
      setShowPrompt(false);
      sendMessageWithLocation();
    } else {
      setShowPrompt(true);
    }
  }, [savedName]);

  if (showPrompt) {
    return (
      <div className="h-screen flex items-center justify-center p-6">
        <ColorSparks />
        <form
          onSubmit={handleSubmit}
          className="bg-[#fea6ab] p-8 rounded-2xl border border-[#fea6ab] shadow-xl w-full max-w-sm z-10"
        >
          <h1 className="text-xl font-bold mb-4">👋 Hi there!</h1>
          <NameRise2D text={"What's your name?"} className={"!text-[16px]"} />
          <input
            type="text"
            className="w-full p-2 border border-[#877f80] rounded-lg mb-4 mt-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
          >
            Continue
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-[#411b82]">
      <nav
        className={`fixed md:block hidden w-full p-4 z-[100px] transition-all duration-300  ${
          navbar
            ? "shadow-md bg-[#fea6ab55] backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className={"flex justify-center space-x-6"}>
          <button onClick={() => scrollToRef(homeRef)} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToRef(aboutRef)} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToRef(projectsRef)} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToRef(contactRef)} className="nav-link">
            Contact
          </button>
        </div>
      </nav>

      <div className="pt-1 h-[100%] bg-[#fdfffe]">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
        <VoiceAssistant
          refs={{
            homeRef,
            aboutRef,
            projectsRef,
            contactRef,
          }}
        />
      </div>

      {navbar && (
        <button
          type="button"
          className="fixed bottom-14 right-4 z-[999] bg-gray-800 p-2 cursor-pointer rounded-xl shadow-lg hover:bg-gray-700 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <FaArrowUp color="#ffffff" />
        </button>
      )}

      <img
        src={avatar}
        alt="Profile"
        className="w-auto h-[150px] sm:h-[300px] fixed bottom-0 right-4 pointer-events-auto"
      />
    </div>
  );
};

export default App;
