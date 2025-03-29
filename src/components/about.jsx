import { motion } from "framer-motion";
import React from "react";
import "../App.css";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

// Skills data with levels (1-100 scale)
const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS / SCSS (Bootstrap & Tailwind)", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Redux / React Toolkit", level: 80 },
    { name: "React Native", level: 75 },
    { name: "Node.js (Beginner)", level: 60 },
    { name: "MongoDB", level: 65 },
];

export const About = () => (
    <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="about-section flex flex-col md:flex-row  justify-center "
    >
        {/* Skills Section */}
        <div className=" w-2/5 md:w-2/5 bg-neutral-100 p-4 rounded-tl-lg rounded-bl-lg ">
            <h2 className="section-title text-lg font-semibold mb-3">Skills</h2>
            <ul className="space-y-3">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <div className="flex justify-between text-sm md:text-base">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-gray-700">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-500 h-2 rounded-md mt-1">
                            <div
                                className="bg-cyan-500 h-2 rounded-md transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        {/* About Me Section */}
        <div className=" w-2/5 md:w-2/5 bg-neutral-100 p-4 rounded-tr-lg rounded-br-lg ">
            <h2 className="section-title text-lg font-semibold mb-3">About Me</h2>
            <p className="section-text text-gray-800 leading-relaxed">
                I am a Front-End Developer with 1.8+ years of experience specializing in React.js, JavaScript, and modern UI frameworks. I have a strong passion for building responsive, user-friendly web applications that enhance user experiences.

                My expertise includes React.js, TypeScript, Next.js, Redux, and UI frameworks like Tailwind CSS and Bootstrap. I am skilled in API integrations, state management, and performance optimization. Additionally, I have a growing interest in React Native and backend technologies like Node.js and MongoDB.

                I thrive in agile environments, collaborating with teams to create scalable applications. My goal is to continuously learn, adapt, and deliver high-quality code that solves real-world problems.
            </p>
        </div>
    </motion.section>
);
