import React from "react";
import { creditCard } from "../assets";
import GetStartedBtn from "./GetStartedBtn";
import Sidebar from "./Sidebar";

const OurServices = () => {
  return (
    <section className="mx-5 lg:mx-10 my-40 flex flex-row">
      <div className="flex-1 flex flex-col justify-center items-start space-y-10">
        <Sidebar
          heading={"Our Services"}
          title={"Real Time\n"}
          spantitle={"Transaction Report"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut\naliquam, purus sit amet luctus venenatis, lectus magna."
          }
        />
        <GetStartedBtn />
      </div>
      <div className="hidden md:flex flex-1 relative items-center justify-end">
        <div className="w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] bg-secondary rounded-full absolute -right-24"></div>
        <img
          src={creditCard}
          alt=""
          className="object-contain z-10 absolute w-80 h-80 right-10 lg:w-[474px] lg:h-[307px]"
        />
      </div>
    </section>
  );
};

export default OurServices;
