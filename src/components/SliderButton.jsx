import React from "react";

const SliderButton = ({ img }) => {
  return (
    <div className="w-[46px] h-[46px] rounded-full border-[3px] border-primary flex items-center justify-center">
      <img src={img} alt="SliderArrow" />
    </div>
  );
};

export default SliderButton;
