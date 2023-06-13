import React from "react";
import { arrowLeftSmall, arrowRightSmall } from "../assets";
import FeedbackCard from "./FeedbackCard";
import SliderButton from "./SliderButton";

const Feedback = () => {
  return (
    <div className="bg-secondary py-[80px]">
      <div className="flex flex-row px-[100px] justify-between items-end">
        <div className="flex flex-col items-start gap-[10px]">
          <h1 className="font-rubik font-semibold text-[20px]">Our Services</h1>
          <p className="font-satoshi font-bold text-[72px] leading-[70px]"> 
            Global business <br />
            love FinanceX
          </p>
        </div>
        <div className="flex gap-[10px] mb-[30px]">
            <SliderButton img={arrowLeftSmall}/>
            <SliderButton img={arrowRightSmall}/>
        </div>
      </div>
      <div className="flex flex-row gap-[20px] my-[50px]">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Feedback;
