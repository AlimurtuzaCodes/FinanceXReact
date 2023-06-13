import React from "react";
import { creditCard } from "../assets";
import GetStartedBtn from "./GetStartedBtn";
import Sidebar from "./Sidebar";

const OurServices = () => {
  return (
    <section className="mx-[80px] my-[100px] flex flex-row">
      <div className="flex-1 flex flex-col justify-center items-start gap-[20px]">
        <Sidebar
          heading={"Our Services"}
          title={"Real Time\n"}
          spantitle={"Transaction Report"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut \naliquam, purus sit amet luctus venenatis, lectus magna."
          }
        />
        <GetStartedBtn />
      </div>
      <div className="flex-1 relative flex justify-start">
        <div className="w-[480px] h-[480px] bg-secondary rounded-full ml-[100px]"></div>
        <img
          src={creditCard}
          alt=""
          className="object-contain z-10 absolute top-[80px] -left-[30px]"
        />
      </div>
    </section>
  );
};

export default OurServices;
