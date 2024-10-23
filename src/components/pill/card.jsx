import React from "react";

const Card = ({ img, text, description, href, height }) => {
  return (
    <div className="w-[375px] h-[1000px] bg-white">
      <div
        className="flex flex-col gap-2 bg-white p-4 box-border"
        style={{ height: height }}
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={img} className="size-[34px] " />
            <p className="font-medium">{text}</p>
          </div>
          <a
            className="bg-[#f3f3f3] inline-flex items-center p-1 rounded-full px-2 font-medium z-20 relative pointer-events-auto cursor-pointer"
            href={href}
            target="_blank"
          >
            Visit <Icon />
          </a>
        </div>
        <p className="text-[#7f7f7f]">{description}</p>
      </div>
    </div>
  );
};
export default Card;

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6m0 0h-8m8 0v8"
      ></path>
    </svg>
  );
}
