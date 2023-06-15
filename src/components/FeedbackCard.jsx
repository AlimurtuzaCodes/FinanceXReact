import React from "react";

const FeedbackCard = () => {
  return (
    <div className="w-[340px] bg-primary rounded-lg px-10 py-12">
      <p className="font-rubik font-normal text-sm text-white leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
      </p>
      <div className="flex space-x-4 mt-4">
        <div className="w-9 h-9 bg-secondary rounded-full"></div>
        <div>
            <h1 className="font-satoshi font-bold text-white text-sm">Alimurtuza</h1>
            <h2 className="font-rubik font-normal text-lgrey text-xs">CEO</h2>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
