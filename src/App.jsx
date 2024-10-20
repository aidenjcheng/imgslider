import React, { useState, useEffect } from "react";
import Pill from "./components/pill/pill";
import { motion, useMotionValue } from "framer-motion";

const SuperBubble = () => {
  const [activePill, setActivePill] = useState(0);
  const dragX = useMotionValue(0);
  const DRAG_BUFFER = 25;

  const handlePillClick = (index) => {
    setActivePill(index);
  };

  const getHeight = () => {
    const heights = [375, 250.66, 250.66, 250.66, 250.66, 148, 104, 126];
    return heights[activePill] || 375; // default to 375px if no match
  };

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && activePill < Pills.length - 1) {
      setActivePill((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && activePill > 0) {
      setActivePill((prev) => prev - 1);
    }
    dragX.set(0); // Reset drag position after drag ends
  };

  useEffect(() => {
    console.log("Active Pill:", activePill);
  }, [activePill]);

  const Pills = [
    {
      img: "/vibes.png",
      alt: "Phone",
      text: "vibes.png",
      bigImg: (
        <img
          src="/vibes.png"
          className="w-[375px] h-auto top-[2px] relative rounded-[20px]"
          alt="Phone"
        />
      ),
    },
    {
      img: "/studio.webp",
      alt: "Email",
      text: "studio.webp",
      bigImg: (
        <img
          src="/studio.webp"
          className="w-[375px] relative h-auto top-[2px] rounded-[20px]"
          alt="Email"
        />
      ),
    },
    {
      img: "/art_in_studio.png",
      alt: "Email",
      text: "art_in_studio.png",
      bigImg: (
        <img
          src="/art_in_studio.png"
          className="w-[375px] h-auto top-[2px] relative rounded-[20px]"
          alt="Email"
        />
      ),
    },
    {
      img: "/standing.webp",
      alt: "Email",
      text: "standing.webp",
      bigImg: (
        <img
          src="/standing.webp"
          className="w-[375px] relative h-auto top-[2px] rounded-[20px]"
          alt="Email"
        />
      ),
    },
    {
      img: "/homies.webp",
      alt: "Email",
      text: "homies.webp",
      bigImg: (
        <img
          src="/homies.webp"
          className="w-[375px] relative h-auto top-[2px] rounded-[20px]"
          alt="Email"
        />
      ),
    },
    {
      img: "/typo.svg",
      alt: "Email",
      text: "typo.by",
      bigImg: (
        <div className="custom-typo-component">
          {/* Custom component logic for Typo */}
          <p>This is Typo component</p>
        </div>
      ),
    },
    {
      img: "/instagram.svg",
      alt: "Email",
      text: "instagram.com",
      bigImg: (
        <div className="custom-instagram-component">
          {/* Custom component logic for Instagram */}
          <p>This is Instagram component</p>
        </div>
      ),
    },
    {
      img: "/youtube.svg",
      alt: "Email",
      text: "youtube.com",
      bigImg: (
        <div className="custom-youtube-component">
          {/* Custom component logic for YouTube */}
          <p>This is YouTube component</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full justify-center relative mt-16">
      <motion.div
        className="flex flex-col w-[375px] rounded-[20px] overflow-hidden"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }} // Constraint updated to allow horizontal drag
        dragMomentum={false}
        style={{ x: dragX }}
        onDragEnd={onDragEnd}
      >
        <div className="text-white w-[375px] p-[16px_16px_36px] gap-[8px] flex flex-wrap shadow-sm text-[1.2em] leading-[1.2em] border border-white/10 bg-gradient-to-b from-[#3076ff] to-[#1d49e5]">
          <p>We work together IRL in Soho, NYC.</p>
          <p>
            Our office doubles as an art studio, film set, and creative space.
          </p>
          {Pills.map((pill, index) => (
            <Pill
              key={index}
              img={pill.img}
              alt={pill.alt}
              text={pill.text}
              activePill={activePill}
              handlePillClick={() => handlePillClick(index)}
              index={index}
            />
          ))}
        </div>
        <motion.div className="w-full relative rounded-[20px] top-[-20px] overflow-hidden border-black/10 border border-solid">
          <Images
            activePill={activePill}
            dragX={dragX}
            Pills={Pills}
            getHeight={getHeight}
            onDragEnd={onDragEnd}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Images = ({ activePill, dragX, Pills, getHeight, onDragEnd }) => {
  return (
    <motion.div
      className="flex w-[800%] bg-black"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }} // Allow full drag across all Pills
      style={{ x: dragX }}
      animate={{
        translateX: `-${activePill * 375}px`,
        height: `${getHeight()}px`,
      }}
      onDragEnd={onDragEnd}
      transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 0.3 }}
    >
      {Pills.map((pill, index) => (
        <motion.div
          key={index}
          className="w-[375px] h-auto pointer-events-none"
        >
          {pill.bigImg}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SuperBubble;
