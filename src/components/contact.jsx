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
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                alert("Email sent successfully!");
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
