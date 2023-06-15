import React from "react";
import { companies } from "../constants";

const Companies = () => {
  return (
    <div className="hidden bg-secondary h-48 md:flex items-center justify-around px-5 lg:px-10">
      {companies.map((company, index) => {
        return <img src={company.img} alt="" key={company.id}/>;
      })}
    </div>
  );
};

export default Companies;
