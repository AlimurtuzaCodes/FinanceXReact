import React from "react";

const Sidebar = ({ heading, title, spantitle, subtitle }) => {
  return (
    <div>
      <h1 className="text-secondary font-rubik font-semibold text-[20px]">
        {heading}
      </h1>
      <p className="text-white font-satoshi font-bold text-[48px] leading-[55px] my-[20px] whitespace-pre-wrap">
        {title}
        <span className="text-secondary">{spantitle}</span>
      </p>
      <p className="text-lgrey font-rubik font-normal leading-[25px] whitespace-pre-wrap">
        {subtitle}
      </p>
    </div>
  );
};

export default Sidebar;
