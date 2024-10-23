import React, { useState, useEffect } from "react";
import Pill from "./components/pill/pill";
import { motion, useMotionValue } from "framer-motion";
import Card from "./components/pill/card";

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
          className="w-[375px] h-auto  relative  "
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
          className="w-[375px] relative h-auto  "
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
          className="w-[375px] h-auto relative  "
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
          className="w-[375px] relative h-auto  "
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
          className="w-[375px] relative h-auto  "
          alt="Email"
        />
      ),
    },
    {
      img: "/typo.svg",
      alt: "Email",
      text: "typo.by",
      bigImg: (
        <Card
          text="typo"
          img="/typo.svg"
          href="https://youtube.com"
          description="dsaijodsjao"
          height="148px"
        />
      ),
    },
    {
      img: "/instagram.svg",
      alt: "Email",
      text: "instagram.com",
      bigImg: (
        <Card
          text="instagram"
          img="/instagram.svg"
          href="https://instagram.com"
          description="dsaijodsjao"
          height="104px"
        />
      ),
    },
    {
      img: "/youtube.svg",
      alt: "Email",
      text: "youtube.com",
      bigImg: (
        <Card
          text="youtube"
          img="/youtube.svg"
          href="https://youtube.com"
          description="dsaijodsjao"
          height="126px"
        />
      ),
    },
  ];

  return (
    <div className="flex w-full justify-center relative mt-16 box-border">
      <motion.div
        className="flex flex-col w-[375px] rounded-[20px] overflow-hidden"
        drag
        dragTransition={{ bounceStiffness: 100, bounceDamping: 9 }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <div className="text-white w-[375px] p-[16px_16px_36px] gap-[8px] flex flex-wrap shadow-sm text-[1.2em] leading-[1.2em] border-2 border-white/10 bg-gradient-to-b from-[#3076ff] to-[#1d49e5]">
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
        <motion.div
          className="w-full relative top-[-20px] overflow-hidden   rounded-[20px]"
          animate={{ height: `${getHeight()}px` }}
        >
          <motion.div
            className="border-2 border-black/10 box-border border-solid absolute top-0 left-0 h-fit  rounded-[20px] w-[375px] z-10 pointer-events-none"
            animate={{ height: `${getHeight()}px` }}
          />
          <motion.div
            className=" absolute top-0 left-0 w-[375px] z-0 pointer-events-none bg-black"
            animate={{ height: `${getHeight()}px` }}
          />

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
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 190.5,
        damping: 32.4,
        mass: 1.9,
      }}
    >
      {Pills.map((pill, index) => (
        <motion.div key={index} className="w-[375px]  pointer-events-none">
          {pill.bigImg}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SuperBubble;
