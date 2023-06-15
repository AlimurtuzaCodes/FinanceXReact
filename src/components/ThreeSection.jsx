import React from "react";
import { arrowRight } from "../assets";
import { threeSection } from "../constants";

const ThreeSection = () => {
  return (
    <section className="mx-5 lg:mx-10 flex flex-col md:flex-row my-14 justify-center items-center">
      {threeSection.map((section, index) => {
        return (
          <div className="group lg:flex-1 w-11/12" key={section.id}>
            <div className="border border-blackborder flex flex-col items-start px-8 lg:px-12 py-14 transition ease delay-120 group-hover:bg-blackborder">
              <div className="w-12 h-12 bg-white transition ease delay-120 group-hover:bg-secondary flex justify-center items-center">
                <img src={section.img} alt="" />
              </div>
              <h1 className="text-white font-satoshi font-bold text-3xl leading-tight my-6 whitespace-pre-wrap">
                {section.title}
              </h1>
              <p className="text-lgrey font-rubik font-normal text-base leading-6 whitespace-pre-wrap">
                {section.subtitle}
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <h1 className="text-white font-satoshi font-bold text-base">
                  Learn More
                </h1>
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
