import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "../App.css";
import contactUs from "../assets/contactus.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://sweetserver.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      variants={fadeIn}
      animate={inView ? "visible" : "hidden"}
      className="contact-section flex flex-col z-10"
    >
      <h2 className="section-title !text-[#d72a46] text-lg font-semibold mb-4 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-[#fea6ab55] text-white rounded-lg shadow-md md:w-3/5 w-full sm:w-11/12 mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactUs}
            alt="Contact Us"
            className="rounded-lg w-[300px] h-[300px] object-contain"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col space-y-4 text-start"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm text-black font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 bg-cyan-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#fea6ab]"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm text-black font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 bg-cyan-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#fea6ab]"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm text-black font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 bg-cyan-50 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#fea6ab]"
                placeholder="Write your message..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-semibold py-2 rounded-md transition-all flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};
