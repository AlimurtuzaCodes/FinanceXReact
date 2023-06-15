import React from "react";
import { heroCard } from "../assets";
import GetStartedBtn from "./GetStartedBtn";
const Hero = () => {
  return (
    <section className="flex md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-start mx-5 lg:mx-10 my-20">
        <h2 className="text-secondary font-rubik font-normal text-xl">
          Welcome! Future Platform
        </h2>
        <p className="text-white font-satoshi font-black text-7xl leading-snug">
          <span>
            The World's <br />
            Most Modern <br />
            Card{" "}
          </span>
          <span className="text-secondary">Platform</span>
        </p>
        <p className="text-lgrey font-rubik font-normal text-sm leading-6 my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
          aliquam, purus sit amet luctus venenatis, lectus magna <br />{" "}
          fringilla urna, porttitor.
        </p>
        <GetStartedBtn />
      </div>
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute w-96 h-96 xl:w-[500px] xl:h-[500px]  bg-secondary rounded-full -right-24 xl:bottom-24 bottom-52"></div>
        <div className="w-full relative">
          <img
            src={heroCard}
            alt=""
            className="object-contain z-10 absolute xl:bottom-24 bottom-52 left-0 min-[2560px]:left-[500px]"
          />
          <img
            src={heroCard}
            alt=""
            className="object-contain z-10 absolute xl:bottom-48 bottom-72 left-0 min-[2560px]:left-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
