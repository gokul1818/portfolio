import { motion } from "framer-motion";
import React from "react";
import "../App.css";

const projects = [
    { name: "Sanchu Animal hospital", description: "A full-stack MERN e-commerce platform with Stripe payment integration.", imgSrc: "https://sanchuanimalhospital.com/images/sanchuLogo.svg" },
    { name: "DigiGrain Solutions Pvt Ltd", description: "A personal portfolio built with React and Tailwind CSS.", imgSrc: "https://static.wixstatic.com/media/4f811e_08d14ce6166542759bdcd808ea92137b~mv2.png/v1/fill/w_99,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DigiGrainLogo_png.png" },
    { name: "EDS", description: "A to-do list app with Redux and Firebase authentication.", imgSrc: "https://eds-egypt.com/img/logo-197-106.6ccb2e95.png" },
    { name: "Boston Living", description: "A React app fetching real-time weather data via OpenWeather API.", imgSrc: "https://bostonliving.com/assets/images/logo.png" },
    { name: "mr med", description: "A Next.js-based blogging platform with Markdown support.", imgSrc: "https://www.mrmed.in/logo.svg" },
    { name: "Thangamayil", description: "A Next.js-based blogging platform with Markdown support.", imgSrc: "https://play-lh.googleusercontent.com/hMQypyXsb70kBcDUzhEDZQA7guUna4Spkb9rt9ehsdeRNjECECHkGtkstelmqggmbQ" },
];

export const Projects = () => (
    <section id="projects" className="flex-col pt-20 w-full">
        <h1 className="section-title text-lg text-center mb-4">Projects</h1>
        <div className="scroll-container">
            <div className="scroll-content">
                {[...projects, ...projects].map((project, index) => (
                    <div key={index} className="scroll-item">
                        <img
                            src={project.imgSrc}
                            alt={project.name}
                            className="w-full h-16 object-contain rounded-md"
                        />
                        <h3 className="text-md text-black font-semibold mt-2">
                            {project.name}
                        </h3>
                        <p className="text-sm text-gray-600 text-wrap">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
