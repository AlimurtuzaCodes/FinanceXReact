import React from "react";

const FeedbackCard = () => {
  return (
    <div className="w-[340px] bg-primary rounded-[8px] px-[40px] py-[50px]">
      <p className="font-rubik font-normal text-[14px] text-white leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
      </p>
      <div className="flex gap-[8px] mt-[14px]">
        <div className="w-[34px] h-[34px] bg-secondary rounded-full"></div>
        <div>
            <h1 className="font-satoshi font-bold text-white text-[14px]">Alimurtuza</h1>
            <h2 className="font-rubik font-normal text-lgrey text-[12px]">CEO</h2>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
