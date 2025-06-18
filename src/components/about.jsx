import dayjs from "dayjs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaAndroid,
  FaApple,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
  FaWindows,
} from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiXcode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "../App.css";

const skills = [
  // Languages
  {
    name: "HTML",
    category: "Languages",
    icon: <FaHtml5 className="text-orange-500 w-10 h-10" />,
    level: 95,
  },
  {
    name: "CSS",
    category: "Languages",
    icon: <FaCss3Alt className="text-blue-500 w-10 h-10" />,
    level: 90,
  },
  {
    name: "SCSS",
    category: "Languages",
    icon: <FaSass className="text-pink-400 w-10 h-10" />,
    level: 85,
  },

  // Programming Languages
  {
    name: "JavaScript",
    category: "Programming Languages",
    icon: <FaJsSquare className="text-yellow-400 w-10 h-10" />,
    level: 90,
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    icon: <SiTypescript className="text-blue-600 w-10 h-10" />,
    level: 75,
  },

  // Front-End
  {
    name: "React",
    category: "Front-End",
    icon: <FaReact className="text-cyan-400 w-10 h-10" />,
    level: 90,
  },
  {
    name: "React Native",
    category: "Front-End",
    icon: <FaReact className="text-cyan-300 w-10 h-10" />,
    level: 85,
  },
  {
    name: "Next.js",
    category: "Front-End",
    icon: <SiNextdotjs className="text-black w-10 h-10" />,
    level: 60,
  },

  // UI Libraries & Tools
  {
    name: "Tailwind CSS",
    category: "UI Libraries & Tools",
    icon: <SiTailwindcss className="text-sky-400 w-10 h-10" />,
    level: 90,
  },
  {
    name: "Bootstrap",
    category: "UI Libraries & Tools",
    icon: <FaBootstrap className="text-purple-500 w-10 h-10" />,
    level: 75,
  },
  {
    name: "Material UI (MUI)",
    category: "UI Libraries & Tools",
    icon: <SiMui className="text-blue-500 w-10 h-10" />,
    level: 85,
  },
  {
    name: "Redux",
    category: "UI Libraries & Tools",
    icon: <SiRedux className="text-purple-600 w-10 h-10" />,
    level: 80,
  },
  {
    name: "React Query",
    category: "UI Libraries & Tools",
    icon: <SiReactquery className="text-red-400 w-10 h-10" />,
    level: 80,
  },
  {
    name: "Axios",
    category: "UI Libraries & Tools",
    icon: <SiAxios className="text-blue-500 w-10 h-10" />,
    level: 85,
  },
  {
    name: "Recharts",
    category: "UI Libraries & Tools",
    icon: <IoStatsChartSharp className="text-pink-500 w-10 h-10" />,
    level: 70,
  },

  // Back-End
  {
    name: "Node.js",
    category: "Back-End",
    icon: <FaNode className="text-green-600 w-10 h-10" />,
    level: 70,
  },
  {
    name: "Express.js",
    category: "Back-End",
    icon: <SiExpress className="text-gray-700 w-10 h-10" />,
    level: 65,
  },
  {
    name: "MongoDB",
    category: "Back-End",
    icon: <SiMongodb className="text-green-500 w-10 h-10" />,
    level: 70,
  },

  // Tools, IDEs & Platforms
  {
    name: "Git / GitHub",
    category: "Tools, IDEs & Platforms",
    icon: <FaGitAlt className="text-red-500 w-10 h-10" />,
    level: 85,
  },
  {
    name: "VS Code",
    category: "Tools, IDEs & Platforms",
    icon: <VscVscode className="text-blue-500 w-10 h-10" />,
    level: 90,
  },
  {
    name: "Xcode",
    category: "Tools, IDEs & Platforms",
    icon: <SiXcode className="text-blue-500 w-10 h-10" />,
    level: 70,
  },
  {
    name: "Android Studio",
    category: "Tools, IDEs & Platforms",
    icon: <FaAndroid className="text-green-600 w-10 h-10" />,
    level: 75,
  },
  {
    name: "Postman",
    category: "Tools, IDEs & Platforms",
    icon: <SiPostman className="text-orange-600 w-10 h-10" />,
    level: 80,
  },
  {
    name: "Firebase",
    category: "Tools, IDEs & Platforms",
    icon: <SiFirebase className="text-yellow-500 w-10 h-10" />,
    level: 75,
  },
  {
    name: "Figma",
    category: "Tools, IDEs & Platforms",
    icon: <SiFigma className="text-pink-500 w-10 h-10" />,
    level: 70,
  },
  {
    name: "Vercel",
    category: "Tools, IDEs & Platforms",
    icon: <SiVercel className="text-black w-10 h-10" />,
    level: 80,
  },
  {
    name: "NPM",
    category: "Tools, IDEs & Platforms",
    icon: <SiNpm className="text-red-600 w-10 h-10" />,
    level: 85,
  },
  {
    name: "Vite",
    category: "Tools, IDEs & Platforms",
    icon: <SiVite className="text-purple-400 w-10 h-10" />,
    level: 80,
  },

  // Operating Systems
  {
    name: "Windows",
    category: "Operating Systems",
    icon: <FaWindows className="text-blue-500 w-10 h-10" />,
    level: 95,
  },
  {
    name: "macOS",
    category: "Operating Systems",
    icon: <FaApple className="text-gray-800 w-10 h-10" />,
    level: 90,
  },
];

const experiences = [
  {
    company: "doodleblue Innovations",
    title: "Software Engineer",
    duration: "Aug 2023 – Present",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Working on cross-platform applications using React js and React Native  .",
      "Implemented UI components using SCSS, Bootstrap, Tailwind CSS, etc...",
      "Collaborated with the team to build scalable features and optimize performance.",
    ],
  },
  {
    company: "doodleblue Innovations",
    title: "React Developer | React-Native (Intern)",
    duration: "Jan 2023 – Aug 2023",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Contributed to building responsive web UIs using React and CSS.",
      "Collaborated on frontend enhancements and bug fixing.",
      "Worked with JavaScript, Bootstrap, and various UI libraries.",
    ],
  },
];

function calculateDuration(durationStr) {
  const [startStr, endStr] = durationStr.split("–").map((s) => s.trim());
  const startDate = dayjs(startStr);
  const endDate = endStr.toLowerCase().includes("present")
    ? dayjs()
    : dayjs(endStr);

  const years = endDate.diff(startDate, "year");
  const months = endDate.diff(startDate.add(years, "year"), "month");

  let result = "";
  if (years > 0) result += `${years} yr${years > 1 ? "s" : ""}`;
  if (months > 0) result += ` ${months} mo${months > 1 ? "s" : ""}`;
  return result.trim();
}

export const About = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="about-section flex flex-col text-[#fea6ab]  justify-center items-center  py-0"
    >
      {/* About Me Section */}
      <div className=" w-sm-96 md:w-3/5  p-4  ">
        <h2 className="section-title !text-[#d72a46] text-lg font-semibold mb-3">
          About Me
        </h2>
        <p className="text-white-800 text-md leading-relaxed">
          Software engineer with 2+ years of experience in frontend development,
          specializing in React JS, React Native, JavaScript, and modern UI
          frameworks. Proficient in building responsive and cross-platform
          applications, integrating APIs, and delivering intuitive user
          interfaces. Experienced in agile development environments and
          effective team collaboration.
        </p>
      </div>
      <div className="w-sm-96 md:w-3/5 p-4">
        <h2 className="section-title text-lg font-semibold mb-3 !text-[#d72a46]">
          Skills
        </h2>

        <div className="relative text-[#d72a46] h-96 overflow-hidden  rounded-lg  show-shadow-lg bg-[#fea6ab55] p-4">
          <div className="absolute inset-0 bg-[#d72a46] opacity-30  blur-bg-circle"></div>
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="auto-scroll-inner">
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={`down-1-${index}`}
                  className="flex flex-col items-center text-center text-xs my-2"
                >
                  {skill.icon}
                  <span className="mt-1 font-medium text-[#d72a46]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="auto-scroll-inner-reverse">
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={`reverse-${index}`}
                  className="flex flex-col items-center text-center text-xs my-2"
                >
                  {skill.icon}
                  <span className="mt-1 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="auto-scroll-inner">
              {skills
                .concat(skills)
                .slice(10)
                .map((skill, index) => (
                  <div
                    key={`down-2-${index}`}
                    className="flex flex-col items-center text-center text-xs my-2"
                  >
                    {skill.icon}
                    <span className="mt-1 font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <h2 className="section-title text-lg font-semibold mb-3 !text-[#d72a46]">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                className="bg-[#fea6ab55] p-4 rounded-lg text-[#d72a46] shadow-md text-left"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold ">{exp.title}</h3>
                  <span className="text-sm ">{exp.duration}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {exp.company} - {exp.location}
                  <span className="text-sm text-gray-600 ms-2">
                    ({calculateDuration(exp.duration)})
                  </span>
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
