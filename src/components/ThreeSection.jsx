import React from "react";
import { arrowRight } from "../assets";
import { threeSection } from "../constants";

const ThreeSection = () => {
  return (
    <section className="mx-[120px] flex my-[50px] justify-center items-center">
      {threeSection.map((section, index) => {
        return (
          <div className="group flex-1" key={section.id}>
            <div
              className="border border-blackborder flex flex-col items-start px-[50px] py-[60px] 
                transition ease delay-120 group-hover:bg-blackborder"
            >
              <div
                className="w-[46px] h-[46px] bg-white transition ease delay-120 group-hover:bg-secondary 
                  flex justify-center items-center"
              >
                <img src={section.img} alt="" />
              </div>
              <h1 className="text-white font-satoshi font-bold text-[32px] my-[24px] whitespace-pre-wrap">
                {section.title}
              </h1>
              <p className="text-lgrey font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-wrap">
                {section.subtitle}
              </p>
              <div className="flex items-center justify-center gap-[8px] mt-[16px]">
                <h1 className="text-white font-satoshi font-bold text-[16px]">Learn More</h1>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ThreeSection;
