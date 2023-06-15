import React from "react";
import { arrowLeftSmall, arrowRightSmall } from "../assets";
import FeedbackCard from "./FeedbackCard";
import SliderButton from "./SliderButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="flex flex-row mx-5 lg:mx-10 justify-between items-end">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="font-rubik font-semibold text-[20px]">Our Services</h1>
          <p className="font-satoshi font-bold text-[72px] leading-[70px]">
            Global business <br />
            love FinanceX
          </p>
        </div>
        <div className="flex space-x-2">
          <SliderButton img={arrowLeftSmall} />
          <SliderButton img={arrowRightSmall} />
        </div>
      </div>
      <div className="flex flex-row gap-[20px] my-[50px] mx-5 lg:mx-10">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        {/* <FeedbackCard /> */}
      </div>
    </div>
  );
};

export default Feedback;
