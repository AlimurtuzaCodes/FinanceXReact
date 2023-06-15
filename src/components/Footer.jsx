import React from "react";


const Footer = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <div className="w-full flex justify-around px-5 lg:px-10">
        <div className="flex-1 flex-col text-lgrey font-rubik font-normal text-base">
          <h1 className="font-satoshi font-bold text-2xl text-white">
            FinanceX
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div></div>
        </div>
        <div className="flex-1 flex-col text-lgrey font-rubik font-normal text-base">
          <h1 className="font-satoshi font-bold text-[22px]">Company</h1>
          <div className="flex flex-col gap-[10px] mt-[12px]">
            <a href="#aboutus">About Us</a>
            <a href="#carrers">Carrers</a>
            <a href="#blog">Blog</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="flex-1 flex-col text-lgrey font-rubik font-normal text-base">
          <h1 className="font-satoshi font-bold text-[22px]">Resources</h1>
          <div className="flex flex-col gap-[10px] mt-[12px]">
            <a href="#templates">Templates</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#freeresources">Free resources</a>
            <a href="#contracttemplates">Contract templates</a>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 flex-col text-lgrey font-rubik font-normal text-base">
          <h1 className="font-satoshi font-bold text-[22px]">
            Join Our Newsletter
          </h1>
          <div className="mt-[12px]">
            <input
              type="email"
              className="w-[250px] h-[44px] bg-lgrey font-rubik font-normal text-[16px] placeholder-lblack px-[16px] py-[6px]"
              placeholder="Your email address"
            />
            <button className="h-[44px] bg-secondary font-satoshi font-bold text-primary px-[24px]">
              Subscribe
            </button>
          </div>
          <p className="mt-[20px] text-[14px]">
            * Will send you weekly updates for your better finance
            management.
          </p>
        </div>
      </div>
      <hr className="w-full bg-white h-[0.5px] my-10" />
      <h1 className="mx-14 sm:mx-0 font-satoshi font-medium text-[16px] text-lgrey text-center">Copyright @ Alimurtuza Patrawala 2023. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
