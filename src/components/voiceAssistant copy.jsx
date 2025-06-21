import React, { useState, useRef } from "react";
import assistantResponses from "./info.json";
import { scroller } from "react-scroll";

const VoiceAssistantd = () => {
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

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

  const speak = (text) => {
    window.speechSynthesis.cancel(); // cancel any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleCommand = (command) => {
    let matched = false;

    for (const cmd of commandActions) {
      if (cmd.keywords.some((kw) => command.includes(kw))) {
        setResponse(cmd.response);
        speak(cmd.response);
        matched = true;
        break;
      }
    }

    if (!matched) {
      const fallback = "Sorry, I didn’t understand that.";
      setResponse(fallback);
      speak(fallback);
    }
  };

  const initializeRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Speech recognition started");
    };

    recognition.onresult = (event) => {
      const result = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join("");
      setTranscript(result);
      console.log("Transcript:", result);
      handleCommand(result.toLowerCase());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setListening(false);
      console.log("Speech recognition ended");
    };

    return recognition;
  };

  const toggleListening = async () => {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
    } else {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        const recognition = initializeRecognition();
        if (recognition) {
          recognitionRef.current = recognition;
          recognition.start();
          setListening(true);
        }
      } catch (err) {
        alert("Microphone access is required.");
        console.error("Permission error:", err);
      }
    }
  };

  return (
    <div>
      {/* Microphone Button */}
      <div className="fixed bottom-14 right-4 z-50">
        <button
          onClick={toggleListening}
          className={`p-4 rounded-full text-white shadow-lg transition-all duration-300 ${
            listening ? "bg-green-600" : "bg-gray-800"
          }`}
        >
          {listening ? "🎤 Listening..." : "🎙️ Speak"}
        </button>
      </div>

      {/* Display Transcript */}
      {transcript && (
        <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow-lg max-w-[90%] z-50">
          <strong>You said:</strong> {transcript}
        </div>
      )}

      {/* Assistant Response */}
      {response && (
        <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 bg-blue-100 text-black px-4 py-2 rounded shadow-lg max-w-[90%] z-50">
          <strong>Assistant:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default VoiceAssistantd;
