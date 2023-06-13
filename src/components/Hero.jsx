import React from "react";
import { heroCard } from "../assets";
import GetStartedBtn from "./GetStartedBtn";
const Hero = () => {
  return (
    <section className="flex flex-row">
      <div className="flex-1 flex flex-col justify-center items-start ml-[80px] my-[80px]">
        <h2 className="text-secondary font-rubik font-normal text-[20px]">
          Welcome! Future Platform
        </h2>
        <p className="text-white font-satoshi font-black text-[70px]">
          <span>
            The World's <br />
            Most Modern <br />
            Card{" "}
          </span>
          <span className="text-secondary">Platform</span>
        </p>
        <p className="text-lgrey font-rubik font-normal text-[18px] leading-[25px] my-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
          aliquam, purus sit amet luctus venenatis, lectus magna <br />{" "}
          fringilla urna, porttitor.
        </p>
        <GetStartedBtn />
      </div>
      <div className="flex-1 relative flex">
        <div className="absolute w-[500px] h-[500px] bg-secondary rounded-full -right-[100px] bottom-[100px]"></div>
        <div className="w-full relative">
          <img
            src={heroCard}
            alt=""
            className="object-contain z-10 absolute bottom-[100px] left-0"
          />
          <img
            src={heroCard}
            alt=""
            className="object-contain z-10 absolute bottom-[180px] -left-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
