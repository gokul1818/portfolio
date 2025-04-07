import { motion } from "framer-motion";
import React, { useState } from "react";
import "../App.css";
import contactUs from "../assets/contactus.jpg";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://sweetserver.onrender.com/api/send-email", {
            // const response = await fetch("http://localhost:4000/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                // alert("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send email.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };


    return (
        <motion.section
            id="contact"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="contact-section flex flex-col">
            <h2 className="section-title text-lg font-semibold mb-4 text-center">Contact Me</h2>
            <div
                className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-neutral-50 text-white rounded-lg shadow-md w-md-3/4 w:sm-96  mx-auto"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={contactUs} alt="Contact Us" className="rounded-lg  w-full max-w-sm object-cover" />
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/2 bg-cyan-50 p-6 rounded-lg shadow-lg">

                    <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 text-start">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm  text-black font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-1 bg-cyan-50 border text-black border-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm text-black font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-1 bg-cyan-50 border border-cyan-600  text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label htmlFor="message" className="block text-sm  text-black font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-1 bg-cyan-50 border text-black border-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message..."
                                rows={4}
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"

                            className="bg-teal-500  hover:bg-teal-700 cursor-pointer text-white font-semibold py-2 rounded-md transition-all"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div >
        </motion.section>

    );
};



//     "Languages": [
//         {
//             name: "HTML",
//             icon: <FaHtml5 className="text-orange-500 w-8 h-8" />,
//             level: 95,
//         },
//         {
//             name: "CSS",
//             icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />,
//             level: 90,
//         },
//         {
//             name: "SCSS",
//             icon: <FaSass className="text-pink-400 w-8 h-8" />,
//             level: 85,
//         },
//     ],
//     "Programming Languages": [
//         {
//             name: "JavaScript",
//             icon: <FaJsSquare className="text-yellow-400 w-8 h-8" />,
//             level: 90,
//         },
//         {
//             name: "TypeScript",
//             icon: <SiTypescript className="text-blue-600 w-8 h-8" />,
//             level: 75,
//         },
//     ],
//     "Front-End": [
//         {
//             name: "React",
//             icon: <FaReact className="text-cyan-400 w-8 h-8" />,
//             level: 90,
//         },
//         {
//             name: "React Native",
//             icon: <FaReact className="text-cyan-300 w-8 h-8" />,
//             level: 85,
//         },
//         {
//             name: "Next.js",
//             icon: <SiNextdotjs className="text-black w-8 h-8" />,
//             level: 60,
//         },
//     ],
//     "UI Libraries & Tools": [
//         {
//             name: "Tailwind CSS",
//             icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />,
//             level: 90,
//         },
//         {
//             name: "Bootstrap",
//             icon: <FaBootstrap className="text-purple-500 w-8 h-8" />,
//             level: 75,
//         },
//         {
//             name: "Material UI (MUI)",
//             icon: <SiMui className="text-blue-500 w-8 h-8" />,
//             level: 85,
//         },
//         {
//             name: "Redux",
//             icon: <SiRedux className="text-purple-600 w-8 h-8" />,
//             level: 80,
//         },
//         {
//             name: "React Query",
//             icon: <SiReactquery className="text-red-400 w-8 h-8" />,
//             level: 80,
//         },
//         {
//             name: "Axios",
//             icon: <SiAxios className="text-blue-500 w-8 h-8" />,
//             level: 85,
//         },
//         {
//             name: "Recharts",
//             icon: <IoStatsChartSharp className="text-pink-500 w-8 h-8" />,
//             level: 70,
//         },
//     ],
//     "Back-End": [
//         {
//             name: "Node.js",
//             icon: <FaNode className="text-green-600 w-8 h-8" />,
//             level: 70,
//         },
//         {
//             name: "Express.js",
//             icon: <SiExpress className="text-gray-700 w-8 h-8" />,
//             level: 65,
//         },
//         {
//             name: "MongoDB",
//             icon: <SiMongodb className="text-green-500 w-8 h-8" />,
//             level: 70,
//         },
//     ],
//     "Tools, IDEs & Platforms": [
//         {
//             name: "Git / GitHub",
//             icon: <FaGitAlt className="text-red-500 w-8 h-8" />,
//             level: 85,
//         },
//         {
//             name: "VS Code",
//             icon: <VscVscode className="text-blue-500 w-8 h-8" />,
//             level: 90,
//         },
//         {
//             name: "Xcode",
//             icon: <SiXcode className="text-blue-500 w-8 h-8" />,
//             level: 70,
//         },
//         {
//             name: "Android Studio",
//             icon: <FaAndroid className="text-green-600 w-8 h-8" />,
//             level: 75,
//         },
//         {
//             name: "Postman",
//             icon: <SiPostman className="text-orange-600 w-8 h-8" />,
//             level: 80,
//         },
//         {
//             name: "Firebase",
//             icon: <SiFirebase className="text-yellow-500 w-8 h-8" />,
//             level: 75,
//         },
//         {
//             name: "Figma",
//             icon: <SiFigma className="text-pink-500 w-8 h-8" />,
//             level: 70,
//         },
//         {
//             name: "Vercel",
//             icon: <SiVercel className="text-black w-8 h-8" />,
//             level: 80,
//         },
//         {
//             name: "NPM",
//             icon: <SiNpm className="text-red-600 w-8 h-8" />,
//             level: 85,
//         },
//         {
//             name: "Vite",
//             icon: <SiVite className="text-purple-400 w-8 h-8" />,
//             level: 80,
//         },
//     ],
//     "Operating Systems": [
//         {
//             name: "Windows",
//             icon: <FaWindows className="text-blue-500 w-8 h-8" />,
//             level: 95,
//         },
//         {
//             name: "macOS",
//             icon: <FaApple className="text-gray-800 w-8 h-8" />,
//             level: 90,
//         },
//     ],
// };