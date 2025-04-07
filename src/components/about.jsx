import { motion } from "framer-motion";
import React from "react";
import "../App.css";
import { FaAndroid, FaApple, FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNode, FaReact, FaSass, FaWindows } from "react-icons/fa";
import { SiAxios, SiExpress, SiFigma, SiFirebase, SiMongodb, SiMui, SiNextdotjs, SiNpm, SiPostman, SiReactquery, SiRedux, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiXcode } from "react-icons/si";
import { IoStatsChartSharp } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const skills = [
    // Languages
    { name: "HTML", category: "Languages", icon: <FaHtml5 className="text-orange-500 w-10 h-10" />, level: 95 },
    { name: "CSS", category: "Languages", icon: <FaCss3Alt className="text-blue-500 w-10 h-10" />, level: 90 },
    { name: "SCSS", category: "Languages", icon: <FaSass className="text-pink-400 w-10 h-10" />, level: 85 },

    // Programming Languages
    { name: "JavaScript", category: "Programming Languages", icon: <FaJsSquare className="text-yellow-400 w-10 h-10" />, level: 90 },
    { name: "TypeScript", category: "Programming Languages", icon: <SiTypescript className="text-blue-600 w-10 h-10" />, level: 75 },

    // Front-End
    { name: "React", category: "Front-End", icon: <FaReact className="text-cyan-400 w-10 h-10" />, level: 90 },
    { name: "React Native", category: "Front-End", icon: <FaReact className="text-cyan-300 w-10 h-10" />, level: 85 },
    { name: "Next.js", category: "Front-End", icon: <SiNextdotjs className="text-black w-10 h-10" />, level: 60 },

    // UI Libraries & Tools
    { name: "Tailwind CSS", category: "UI Libraries & Tools", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" />, level: 90 },
    { name: "Bootstrap", category: "UI Libraries & Tools", icon: <FaBootstrap className="text-purple-500 w-10 h-10" />, level: 75 },
    { name: "Material UI (MUI)", category: "UI Libraries & Tools", icon: <SiMui className="text-blue-500 w-10 h-10" />, level: 85 },
    { name: "Redux", category: "UI Libraries & Tools", icon: <SiRedux className="text-purple-600 w-10 h-10" />, level: 80 },
    { name: "React Query", category: "UI Libraries & Tools", icon: <SiReactquery className="text-red-400 w-10 h-10" />, level: 80 },
    { name: "Axios", category: "UI Libraries & Tools", icon: <SiAxios className="text-blue-500 w-10 h-10" />, level: 85 },
    { name: "Recharts", category: "UI Libraries & Tools", icon: <IoStatsChartSharp className="text-pink-500 w-10 h-10" />, level: 70 },

    // Back-End
    { name: "Node.js", category: "Back-End", icon: <FaNode className="text-green-600 w-10 h-10" />, level: 70 },
    { name: "Express.js", category: "Back-End", icon: <SiExpress className="text-gray-700 w-10 h-10" />, level: 65 },
    { name: "MongoDB", category: "Back-End", icon: <SiMongodb className="text-green-500 w-10 h-10" />, level: 70 },

    // Tools, IDEs & Platforms
    { name: "Git / GitHub", category: "Tools, IDEs & Platforms", icon: <FaGitAlt className="text-red-500 w-10 h-10" />, level: 85 },
    { name: "VS Code", category: "Tools, IDEs & Platforms", icon: <VscVscode className="text-blue-500 w-10 h-10" />, level: 90 },
    { name: "Xcode", category: "Tools, IDEs & Platforms", icon: <SiXcode className="text-blue-500 w-10 h-10" />, level: 70 },
    { name: "Android Studio", category: "Tools, IDEs & Platforms", icon: <FaAndroid className="text-green-600 w-10 h-10" />, level: 75 },
    { name: "Postman", category: "Tools, IDEs & Platforms", icon: <SiPostman className="text-orange-600 w-10 h-10" />, level: 80 },
    { name: "Firebase", category: "Tools, IDEs & Platforms", icon: <SiFirebase className="text-yellow-500 w-10 h-10" />, level: 75 },
    { name: "Figma", category: "Tools, IDEs & Platforms", icon: <SiFigma className="text-pink-500 w-10 h-10" />, level: 70 },
    { name: "Vercel", category: "Tools, IDEs & Platforms", icon: <SiVercel className="text-black w-10 h-10" />, level: 80 },
    { name: "NPM", category: "Tools, IDEs & Platforms", icon: <SiNpm className="text-red-600 w-10 h-10" />, level: 85 },
    { name: "Vite", category: "Tools, IDEs & Platforms", icon: <SiVite className="text-purple-400 w-10 h-10" />, level: 80 },

    // Operating Systems
    { name: "Windows", category: "Operating Systems", icon: <FaWindows className="text-blue-500 w-10 h-10" />, level: 95 },
    { name: "macOS", category: "Operating Systems", icon: <FaApple className="text-gray-800 w-10 h-10" />, level: 90 },
];


export const About = () => (
    <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="about-section flex flex-col  justify-center items-center "
    >
        {/* About Me Section */}
        <div className=" w-sm-96 md:w-3/5  p-4  ">
            <h2 className="section-title text-lg font-semibold mb-3">About Me</h2>
            <p className="section-text text-gray-800 leading-relaxed">
                I am a Front-End Developer with 1.8+ years of experience specializing in React.js, JavaScript, and modern UI frameworks. I have a strong passion for building responsive, user-friendly web applications that enhance user experiences.

                My expertise includes React.js, TypeScript, Next.js, Redux, and UI frameworks like Tailwind CSS and Bootstrap. I am skilled in API integrations, state management, and performance optimization. Additionally, I have a growing interest in React Native and backend technologies like Node.js and MongoDB.

                I thrive in agile environments, collaborating with teams to create scalable applications. My goal is to continuously learn, adapt, and deliver high-quality code that solves real-world problems.
            </p>
        </div>
        <div className="w-sm-96 md:w-2/5 p-4">
            <h2 className="section-title text-lg font-semibold mb-3">Skills</h2>

            <div className="relative h-80 overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-blue-100 via-blue-100 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-blue-100 via-blue-100 to-transparent z-10" />

                {/* Columns with Independent Scroll */}
                <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Scroll Down */}
                    <div className="auto-scroll-inner">
                        {skills.concat(skills).map((skill, index) => (
                            <div key={`down-1-${index}`} className="flex flex-col items-center text-center text-xs my-2">
                                {skill.icon}
                                <span className="mt-1 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Up */}
                    <div className="auto-scroll-inner-reverse">
                        {skills.concat(skills).map((skill, index) => (
                            <div key={`reverse-${index}`} className="flex flex-col items-center text-center text-xs my-2">
                                {skill.icon}
                                <span className="mt-1 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Down Again */}
                    <div className="auto-scroll-inner">
                        {skills.concat(skills).slice(10).map((skill, index) => (
                            <div key={`down-2-${index}`} className="flex flex-col items-center text-center text-xs my-2">
                                {skill.icon}
                                <span className="mt-1 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>






    </motion.section>
);
