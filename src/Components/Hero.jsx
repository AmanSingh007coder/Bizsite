import React from "react";

export const Hero = () => {
  return (
    <div id = 'home' className="text-white">
      <div className="w-full h-screen mt-[-96px] text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 mt-14">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold text-7xl py-6">Grow With Data.</h1>
        <p className="font-bold text-4xl py-4">
          Fast,Flexible and Financing For Business and Startups.
        </p>
        <p className="font-bold text-2xl text-gray-500 pb-20">
          We help the business and startups to use our exclusive services as
          BTB,BTC and SASS and others
        </p>
        <button className="bg-[#00df9a] w-[200px] py-3 my-6 rounded-md text-black mx-auto cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
