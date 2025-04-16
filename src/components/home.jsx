import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { FaBagShopping, FaEarthAsia } from "react-icons/fa6";
import "../App.css";
import avatar from "../assets/avatar.jpg";
import { SiJirasoftware } from "react-icons/si";
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Home = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("gokulakrishnan.developer18@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }
    return (
        <motion.section
            id="home"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="home-section flex flex-col items-center justify-center min-h-screen text-center relative"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50 opacity-30  blur-bg-box"></div>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                    className="relative mt-10 w-60 h-60 rounded-full bg-gradient-to-bl from-[#26c5c5] to-[#1f8fcb] p-4 shadow-lg "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8 }}
                >
                    <img
                        src={avatar} // Replace with your image path
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full "
                    />
                </motion.div>

                <div className="text-left">
                    <h1 className="text-4xl font-bold">
                        Hello, I'm <span className="text-primary">GokulaKrishnan</span> <span className="text-shake">🤚</span>
                    </h1>
                    <motion.p
                        className="text-lg text-gray-200 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                         React Js | React-Native | Node Js | Express Js | MongoDB 
                    </motion.p>



                    {/* Download CV Button */}
                    <div className="flex flex-col gap-4 mt-4">
                        {/* Location */}
                        <div className="flex items-center">
                            <FaEarthAsia className="text-2xl text-sky-400 mr-3" />
                            <span>Based in India</span>
                        </div>

                        {/* Job */}
                        <div className="flex items-center">
                            <SiJirasoftware  className="text-2xl text-white mr-3" />
                            <span>Software Engineer at Doodleblue</span>
                        </div>

                        {/* Email */}
                        <div onClick={handleCopy} className="flex items-center cursor-pointer">
                            <FaEnvelope className="text-2xl text-red-400 mr-3" />
                            {!copied ?
                                <span>
                                    gokulakrishnan.developer18@gmail.com
                                </span> :
                                <span className=" ms-3 text-xs bg-black text-green-500 px-2 py-1 rounded-md">
                                    Copied!
                                </span>
                            }
                        </div>
                        {/* Download Resume */}
                        <div className="flex items-center">
                            <FaDownload className="text-2xl text-green-600 mr-3" />
                            <a href="../../public/gokulakrishnanResume.pdf" download target="_blank" className="text-black-600">
                                Download My Resume
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    )
};