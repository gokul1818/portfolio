import { motion } from "framer-motion";
import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { FaBagShopping, FaEarthAsia } from "react-icons/fa6";
import "../App.css";
import avatar from "../assets/avatar.jpg";
import resume from "../../public/gokulakrishnanResume.pdf"; // 
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Home = () => (
    <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="home-section flex flex-col items-center justify-center min-h-screen text-center"
    >
        <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
                className="relative mt-10 w-60 h-60 rounded-full bg-gradient-to-bl from-[#26c5c5] to-[#1f8fcb] p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8 }}
            >
                <img
                    src={avatar} // Replace with your image path
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                />
            </motion.div>

            <div className="text-left">
                <h1 className="text-4xl font-bold">
                    Hello, I'm <span className="text-primary">GokulaKrishnan</span> <span className="text-shake">🤚</span>
                </h1>
                <motion.p
                    className="text-lg text-gray-700 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Frontend Developer | React Js | React-Native
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
                        <FaBagShopping className="text-2xl text-amber-900 mr-3" />
                        <span>Software Engineer at Doodleblue</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <FaEnvelope className="text-2xl text-red-400 mr-3" />
                        <span>
                            gokulakrishnan.developer@gmail.com
                        </span>
                    </div>
                    {/* Download Resume */}
                    <div className="flex items-center">
                        <FaDownload className="text-2xl text-black-100 mr-3" />
                        <a href="../../public/gokulakrishnanResume.pdf" download target="_blank" className="text-black-600">
                            Download My Resume
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </motion.section>
);