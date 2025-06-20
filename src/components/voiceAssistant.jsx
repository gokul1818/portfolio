// VoiceAssistant.jsx
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { scroller } from "react-scroll";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import assistantResponses from "./info.json";

const VoiceAssistant = () => {
  const [active, setActive] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [assistantReply, setAssistantReply] = useState("");
  const [isClient, setIsClient] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setIsClient(true); // Ensures this code only runs in browser
  }, []);

  const commandActions = [
    {
      keywords: ["home"],
      action: () => scroller.scrollTo("home", { smooth: true, duration: 800 }),
      response: "Navigating to Home",
    },
    {
      keywords: ["about"],
      action: () => scroller.scrollTo("about", { smooth: true, duration: 800 }),
      response: "Navigating to About section",
    },
    {
      keywords: ["project"],
      action: () =>
        scroller.scrollTo("projects", { smooth: true, duration: 800 }),
      response: "Navigating to Projects",
    },
    {
      keywords: ["contact"],
      action: () =>
        scroller.scrollTo("contact", { smooth: true, duration: 800 }),
      response: "Navigating to Contact section",
    },
    {
      keywords: ["how are you"],
      response: "I'm just code, but thanks for asking!",
    },
    {
      keywords: ["hello", "hi"],
      response: "Hello! How can I help you today?",
    },
    {
      keywords: ["thank you"],
      response: "You're welcome!",
    },
    {
      keywords: ["introduce you"],
      response: assistantResponses.info.about,
    },
    {
      keywords: ["experience"],
      response: assistantResponses.info.experience_summary,
    },
    {
      keywords: ["skills"],
      response: assistantResponses.info.skills,
    },
    {
      keywords: ["language", "html", "css", "javascript"],
      response: assistantResponses.info.skills_summary.languages,
    },
    {
      keywords: ["frontend"],
      response: assistantResponses.info.skills_summary.frontend,
    },
    {
      keywords: ["backend", "node", "express"],
      response: assistantResponses.info.skills_summary.backend,
    },
    {
      keywords: ["tools", "platform", "ide"],
      response: assistantResponses.info.skills_summary.tools,
    },
    {
      keywords: ["operating system"],
      response: assistantResponses.info.skills_summary.operating_systems,
    },
    {
      keywords: ["email", "gmail"],
      response: `You can contact Gokulakrishnan at ${assistantResponses.info.email}`,
    },
    {
      keywords: ["contactNumber", "phone number"],
      response: `+91 9445084727`,
    },
    {
      keywords: ["name"],
      response: `My name is ${assistantResponses.info.name}, your web assistant.`,
    },
    {
      keywords: ["resume", "cv"],
      response: `You can download the resume from the resume section or access it directly from ${assistantResponses.info.resume}`,
    },
  ];

  const handleCommand = async (text) => {
    const command = text.toLowerCase().trim();
    SpeechRecognition.stopListening();
    setIsNavigating(true);
    let response = "Sorry, I didn't understand that.";

    // External links
    if (command.includes("github")) {
      window.open("https://github.com/gokul1818", "_blank");
      response = "Opening your GitHub profile.";
    } else if (command.includes("linkedin")) {
      window.open(
        "https://www.linkedin.com/in/gokulakrishnan-b-2a7571241/",
        "_blank"
      );
      response = "Opening LinkedIn profile.";
    } else if (command.includes("instagram")) {
      window.open("https://www.instagram.com/mr_rider.18", "_blank");
      response = "Opening Instagram profile.";
    } else {
      for (const cmd of commandActions) {
        if (cmd.keywords.some((kw) => command.includes(kw))) {
          if (cmd.action) cmd.action();
          response = cmd.response;
          break;
        }
      }
    }

    const utter = new SpeechSynthesisUtterance(response);
    utter.onend = () => {
      if (active) {
        SpeechRecognition.startListening({ continuous: false });
        setAssistantReply("");
      }
      setIsNavigating(false);
    };

    window.speechSynthesis.speak(utter);
    setAssistantReply(response);
    resetTranscript();
  };

  useEffect(() => {
    if (transcript && !listening && active && !isNavigating) {
      const delay = setTimeout(() => handleCommand(transcript), 800);
      return () => clearTimeout(delay);
    }
  }, [transcript, listening, active, isNavigating]);

  useEffect(() => {
    if (!isClient || !SpeechRecognition.browserSupportsSpeechRecognition()) return;

    if (active && !isNavigating) {
      SpeechRecognition.startListening({ continuous: false });
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
  }, [active, isClient]);

  const toggleListening = async () => {
    if (!isClient) return;

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setActive((prev) => !prev);
      setIsNavigating(false);
      resetTranscript();
    } catch (error) {
      console.error("Mic permission denied:", error);
      alert("Microphone access is required to use voice assistant.");
    }
  };

  if (!isClient || !SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null; // Prevents rendering on server or unsupported browsers
  }

  return (
    <>
      <div className="fixed bottom-14 right-4 z-[999]">
        <button
          onClick={toggleListening}
          type="button"
          className={`p-2 rounded-full cursor-pointer shadow-lg text-white transition-all duration-300 ${
            listening ? "bg-gray-800" : "bg-red-400"
          }`}
          title={listening ? "Listening..." : "Click to Speak"}
        >
          {listening ? <FaMicrophone size={20} /> : <FaMicrophoneSlash size={20} />}
        </button>
      </div>

      {(assistantReply || (listening && transcript)) && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-black text-md px-4 py-2 rounded shadow-md z-[999] max-w-[90%] text-center">
          {assistantReply || transcript}
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
