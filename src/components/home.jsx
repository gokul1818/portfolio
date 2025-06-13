import { useState } from "react";
import { FaDownload, FaEarthAsia, FaEnvelope } from "react-icons/fa6";
import { SiJirasoftware } from "react-icons/si";
import NameRise2D from "./gokul-text";

export const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gokulakrishnan.developer18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  // ../../public/fonts/roboto.json
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-[#0e3140] overflow-hidden z-10 "
    >
      <div className="text-left">
        <NameRise2D text="GOKULAKRISHNAN" />
        <p className="text-lg text-#0e3140 mt-2">
          React Js | React-Native | Node Js | Express Js | MongoDB
        </p>

        {/* Info Section */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center">
            <FaEarthAsia className="text-2xl text-[#411b82] mr-3" />
            <span>Based in India</span>
          </div>

          <div className="flex items-center">
            <SiJirasoftware className="text-2xl text-[#411b82] mr-3" />
            <span>Software Engineer at Doodleblue</span>
          </div>

          <div
            onClick={handleCopy}
            className="flex items-center cursor-pointer"
          >
            <FaEnvelope className="text-2xl text-[#411b82] mr-3" />
            {!copied ? (
              <span>gokulakrishnan.developer18@gmail.com</span>
            ) : (
              <span className="ms-3 text-xs  text-[#411b82] px-2 py-1 rounded-md">
                Copied!
              </span>
            )}
          </div>

          <div className="flex items-center">
            <FaDownload className="text-2xl text-[#411b82] mr-3" />
            <a
              href="/gokulakrishnanResume.pdf"
              download
              className="text-[#411b82] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
