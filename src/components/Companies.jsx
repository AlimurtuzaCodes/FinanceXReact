import React from "react";
import { companies } from "../constants";

const Companies = () => {
  return (
    <div className="bg-secondary h-[200px]  flex items-center justify-between px-[80px]">
      {companies.map((company, index) => {
        return <img src={company.img} alt="" key={company.id} />;
      })}
    </div>
  );
};

export default Companies;
