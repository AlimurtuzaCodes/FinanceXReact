import React from "react";

const Sidebar = ({ heading, title, spantitle, subtitle }) => {
  return (
    <div>
      <h1 className="text-secondary font-rubik font-semibold text-xl">
        {heading}
      </h1>
      <p className="text-white font-satoshi font-bold text-5xl leading-tight my-[20px] whitespace-pre-wrap">
        {title}
        <span className="text-secondary">{spantitle}</span>
      </p>
      <p className="text-lgrey font-rubik font-normal text-sm leading-6 whitespace-pre-wrap">
        {subtitle}
      </p>
    </div>
  );
};

export default Sidebar;
