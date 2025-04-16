import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import "../App.css";

const projects = [
    { name: "Sanchu Animal hospital", description: "A full-stack MERN e-commerce platform with Stripe payment integration.", imgSrc: "https://sanchuanimalhospital.com/images/sanchuLogo.svg" },
    { name: "DigiGrain Solutions Pvt Ltd", description: "A personal portfolio built with React and Tailwind CSS.", imgSrc: "https://static.wixstatic.com/media/4f811e_08d14ce6166542759bdcd808ea92137b~mv2.png/v1/fill/w_99,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DigiGrainLogo_png.png" },
    { name: "EDS", description: "A to-do list app with Redux and Firebase authentication.", imgSrc: "https://eds-egypt.com/img/logo-197-106.6ccb2e95.png" },
    { name: "Boston Living", description: "A React app fetching real-time weather data via OpenWeather API.", imgSrc: "https://bostonliving.com/assets/images/logo.png" },
    { name: "mr med", description: "A Next.js-based blogging platform with Markdown support.", imgSrc: "https://www.mrmed.in/logo.svg" },
    { name: "Thangamayil", description: "A Next.js-based blogging platform with Markdown support.", imgSrc: "https://play-lh.googleusercontent.com/hMQypyXsb70kBcDUzhEDZQA7guUna4Spkb9rt9ehsdeRNjECECHkGtkstelmqggmbQ" },
];

export const Projects = () => {
    const ref = useRef();
    const inView = useInView(ref, { once: true });
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" }
        }
    };
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            variants={fadeIn}
            animate={inView ? "visible" : "hidden"}
            id="projects" className="flex-col pt-20 w-full">
            <h1 className="section-title text-lg text-center mb-4">Projects</h1>
            <div className="scroll-container  w-sm-96  w-3/5 p-4 ">
                {/* <div className="scroll-content"> */}
                {projects.map((project, index) => (
                    <div key={index} className="scroll-item relative bg-gray-800">
                        <div className="bg-gray-400 blur-xl h-16 " >
                            <img
                                src={project.imgSrc}
                                alt={project.name}
                                className="w-full opacity-50  h-16 object-contain rounded-md"
                            />
                        </div>
                        <img
                            src={project.imgSrc}
                            alt={project.name}
                            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-16 object-contain rounded-md"
                        />

                        <h3 className="text-md text-gray-300 font-semibold mt-2">
                            {project.name}
                        </h3>
                        <p className="text-sm text-gray-400 text-wrap">{project.description}</p>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </motion.section>
    )
}
