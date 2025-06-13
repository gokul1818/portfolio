import { motion } from "framer-motion";

const NameRise2D = ({ text = "text", className = "" }) => {
  const letters = text?.split("");
  return (
    <div className="flex  ">
      <div
        className={` ${className} flex space-x-1 text-[#0e3140] text-5xl font-bold`}
      >
        {letters?.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default NameRise2D;
