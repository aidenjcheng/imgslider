import React from "react";
import { motion } from "framer-motion";

const Pill = ({ text, img, alt, activePill, handlePillClick, index }) => {
  return (
    <motion.div
      className=" outline outline-white/10 hover:outline-white/40 flex gap-1  w-fit bg-[rgba(255,255,255,0.18)] rounded-full items-center text-[0.8em] px-2 transition-[outline] ease-in-out duration-300"
      onClick={handlePillClick}
      animate={{
        backgroundColor:
          activePill === index
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.18)",
        color: activePill === index ? "#3076ff" : "#fff",
      }}
      transition={{
        backgroundColor: { duration: 0.2 },
        color: { duration: 0.2 },
      }}
    >
      <img src={img} alt={alt} className="h-[18px] rounded-[2px]" />
      {text}
    </motion.div>
  );
};

export default Pill;
