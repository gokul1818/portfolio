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

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-[#0e3140] overflow-hidden z-10 px-4"
    >
      <div className="w-full max-w-2xl">
        <div className="text-center sm:text-left">
          <NameRise2D text="GOKULAKRISHNAN" className="text-xl sm:text-3xl mx-auto sm:mx-0" />
          <p className="text-base sm:text-lg text-[#0e3140] mt-2">
            React Js | React-Native | Node Js | Express Js | MongoDB
          </p>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4 mt-6 sm:mt-8 text-sm sm:text-base">
          <div className="flex items-center">
            <FaEarthAsia className="text-xl sm:text-2xl text-[#411b82] mr-3" />
            <span>Based in India</span>
          </div>

          <div className="flex items-center">
            <SiJirasoftware className="text-xl sm:text-2xl text-[#411b82] mr-3" />
            <span>Software Engineer at Doodleblue</span>
          </div>

          <div
            onClick={handleCopy}
            className="flex items-center cursor-pointer"
          >
            <FaEnvelope className="text-xl sm:text-2xl text-[#411b82] mr-3" />
            {!copied ? (
              <span className="break-all">
                gokulakrishnan.developer18@gmail.com
              </span>
            ) : (
              <span className="text-xs text-[#411b82] px-2 py-1 rounded-md">
                Copied!
              </span>
            )}
          </div>

          <div className="flex items-center">
            <FaDownload className="text-xl sm:text-2xl text-[#411b82] mr-3" />
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
