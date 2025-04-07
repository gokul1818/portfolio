import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Gokulakrishnan All Rights Reserved.</p>

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-4 mt-4">
                    <a href="https://github.com/gokul1818" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-neutral-100 hover:text-gray-400 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/gokulakrishnan-b-2a7571241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-neutral-100 hover:text-gray-400 transition" />
                    </a>
                    <a href="mailto:gokulakrishnan.developer18@gmail.com" >
                        <FaEnvelope className="text-2xl text-neutral-100 hover:text-gray-400 transition" />
                    </a>
                    <a href="https://www.instagram.com/mr_rider.18?igsh=MXFqd29idW54eTV1ZQ==">
                        <FaInstagram className="text-2xl text-neutral-100 hover:text-gray-400 transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
