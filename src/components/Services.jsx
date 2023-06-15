import React from "react";
import { arrowTilt } from "../assets";
import { services } from "../constants";
import GetStartedBtn from "./GetStartedBtn";

const Services = () => {
  return (
    <div className="md:my-12 mx-5 lg:mx-8 flex items-start justify-center relative">
      <div className="flex flex-col items-start gap-[20px] absolute md:left-10 lg:left-24">
        <h1 className="text-secondary font-rubik font-normal text-xl">
          Our Services
        </h1>
        <p className="text-white font-satoshi font-semibold text-5xl leading-tight mb-2">
          Browse our <br />
          services & <span className="text-secondary">offerings</span>
        </p>
        <GetStartedBtn />
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end lg:mr-24">
        {services.map((service, index) => {
          if (index == 0) {
            return (
              <div className="w-[350px] h-[400px] ml-48" key={service.id}></div>
            );
          }
          return (
            <div className="group" key={service.id}>
              <div
                className="w-[340px] h-[430px] border border-blackborder flex flex-col items-start px-8 py-12 
                transition ease delay-120 group-hover:bg-blackborder"
              >
                <hr className="bg-white w-[34px] h-[2px]" />
                <h1 className="text-white font-satoshi font-medium text-2xl my-6">
                  {service.title}
                </h1>
                <p className="text-lgrey font-rubik font-normal text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor.
                </p>
                <div className="w-full flex justify-end mt-20">
                  <div className="w-12 h-12 bg-white transition ease delay-120 group-hover:bg-secondary flex justify-center items-center">
                    <img src={arrowTilt} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
