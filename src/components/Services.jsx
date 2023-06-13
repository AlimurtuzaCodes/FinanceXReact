import React from "react";
import { arrowTilt } from "../assets";
import { services } from "../constants";
import GetStartedBtn from "./GetStartedBtn";

const Services = () => {
  return (
    <div className="m-[80px] flex items-start justify-center relative">
      <div className="flex flex-col items-start gap-[20px] absolute left-[100px]">
        <h1 className="text-secondary font-rubik font-normal text-[20px]">
          Our Services
        </h1>
        <p className="text-white font-satoshi font-semibold text-[48px]">
          Browse our <br />
          services & <span className="text-secondary">offerings</span>
        </p>
        <GetStartedBtn />
      </div>
      <div className="flex flex-wrap justify-end mr-[100px]">
        {services.map((service, index) => {
          if (index == 0) {
            return (
              <div
                className="w-[350px] h-[400px] ml-[200px]"
                key={service.id}
              ></div>
            );
          }
          return (
            <div className="group" key={service.id}>
              <div
                className="w-[340px] h-[430px] border border-blackborder flex flex-col items-start px-[30px] py-[50px] 
                transition ease delay-120 group-hover:bg-blackborder"
              >
                <hr className="bg-white w-[34px] h-[2px]" />
                <h1 className="text-white font-satoshi font-medium text-[24px] my-[24px]">
                  {service.title}
                </h1>
                <p className="text-lgrey font-rubik font-normal text-[16px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor.
                </p>
                <div className="w-full flex justify-end mt-[80px]">
                  <div
                    className="w-[46px] h-[46px] bg-white transition ease delay-120 group-hover:bg-secondary 
                  flex justify-center items-center"
                  >
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
