import React from "react";
import { arrowRight } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => (
  <nav className="flex flex-row justify-between mx-[80px] py-4">
    <h1 className="text-white font-satoshi font-bold text-[24px]">FinanceX</h1>
    <ul className="flex flex-row list-none flex-1 items-center justify-center gap-[60px]">
      {navLinks.map((nav, index) => (
        <li
          className="cursor-pointer font-rubik font-normal text-lgrey text-[16px]"
          key={nav.id}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
    <div className="flex flex-row items-center gap-2 cursor-pointer">
      <button className="font-satoshi font-medium text-white text-[16px]">
        Sign Up
      </button>
      <img
        src={arrowRight}
        alt="arrowRight"
        className="object-contain w-[14px] h-[14px]"
      />
    </div>
  </nav>
);

export default Navbar;
