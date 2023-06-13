import React from "react";
import { map } from "../assets";
import Sidebar from "./Sidebar";

const Benefits = () => {
  return (
    <section className="mx-[80px] my-[100px] flex flex-row">
      <div className="flex-1 flex flex-col justify-start items-start">
        <Sidebar
          heading={"Benefits"}
          title={"We have many\nusers all over the\n"}
          spantitle={"world"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut \naliquam, purus sit amet luctus venenatis, lectus magna."
          }
        />
        <div className="flex flex-row gap-[100px] mt-[40px] text-secondary">
          <div>
            <h2 className="text-white font-satoshi font-black text-[28px]">
              10M<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-[14px] mt-[5px]">
              User active
            </h3>
          </div>
          <div>
            <h2 className="text-white font-satoshi font-black text-[28px]">
              30<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-[14px] mt-[5px]">
              Country
            </h3>
          </div>
          <div>
            <h2 className="text-white font-satoshi font-black text-[28px]">
              50M<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-[14px] mt-[5px]">
              Transaction
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={map} alt="map" className="object-contain" />
      </div>
    </section>
  );
};

export default Benefits;
