import React, { useState } from "react";
import { navLinks } from "../constants";
import SignUpBtn from "./Utility/SignUpBtn";
import { hamburgerMenu } from "../assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row justify-between mx-5 py-4 lg:mx-8">
      <div className="flex justify-between  flex-row">
        <h1 className="text-white font-satoshi font-bold text-2xl">FinanceX</h1>
        <img
          src={hamburgerMenu}
          alt="hamburgerMenu"
          onClick={() => {
            setMenuOpen((menuOpen) => !menuOpen);
          }}
          className="object-contain w-8 h-8 md:hidden"
        />
      </div>
      <div
        className={`flex-1 flex bg-primary flex-col md:flex-row transition-all duration-500 ease-in-out z-10 w-full md:static absolute ${
          menuOpen ? "top-20" : "-top-96"
        } 'my-4 md:my-0'`}
      >
        <ul className="md:flex flex-row list-none flex-1 items-center justify-center gap-14 lg:gap-20 space-y-4 md:space-y-0">
          {navLinks.map((nav, index) => (
            <li
              className="cursor-pointer font-rubik font-normal text-lgrey text-base hover:text-white text-center"
              key={nav.id}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <SignUpBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
