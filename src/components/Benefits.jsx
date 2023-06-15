import React from "react";
import { map } from "../assets";
import Sidebar from "./Sidebar";

const Benefits = () => {
  return (
    <section className="mx-5 lg:mx-10 my-40 flex flex-row">
      <div className="flex-1 flex flex-col justify-center items-center">
        <Sidebar
          heading={"Benefits"}
          title={"We have many\nusers all over the\n"}
          spantitle={"world"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut \naliquam, purus sit amet luctus venenatis, lectus magna."
          }
        />
        <div className="flex flex-row space-x-20 mt-10 text-secondary">
          <div>
            <h2 className="text-white font-satoshi font-black text-3xl">
              10M<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-sm mt-1">
              User active
            </h3>
          </div>
          <div>
            <h2 className="text-white font-satoshi font-black text-3xl">
              30<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-sm mt-1">
              Country
            </h3>
          </div>
          <div>
            <h2 className="text-white font-satoshi font-black text-3xl">
              50M<span className="text-secondary">+</span>
            </h2>
            <h3 className="font-rubik font-normal text-sm mt-1">
              Transaction
            </h3>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 ml-10 lg:ml-0">
        <img src={map} alt="map" className="object-contain" />
      </div>
    </section>
  );
};

export default Benefits;
