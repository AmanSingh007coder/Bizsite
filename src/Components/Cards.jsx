import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";

export const Cards = () => {

  const cardData = [
    {
      id: 1,
      icon: <FaUserLarge size={60} />,
      title: "Single User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send upto 2GB"],
      buttonStyle: "bg-[#00df9a] text-black",
    },
    {
      id: 2,
      icon: <HiUsers size={75} />,
      title: "Multi User",
      price: "$250",
      features: ["1 TB Storage", "4+ Granted User", "Send upto 30GB"],
      buttonStyle: "bg-black text-[#00df9a]",
    },
    {
      id: 3,
      icon: <FaUsers size={75} />,
      title: "Community",
      price: "$2400",
      features: ["3 TB Storage", "7+ Granted User", "Send upto 49GB"],
      buttonStyle: "bg-[#00df9a] text-black",
    },
  ];

  return (
    <div id="resources" className="bg-gray-300 w-full py-[6rem] px-6 border border-blue-700">
      {/* ✅ Responsive grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-full shadow-xl rounded-lg flex flex-col p-6 my-4 hover:scale-105 duration-300 h-[500px] border border-zinc-400"
          >
            {/* Icon */}
            <div className="flex justify-center">{card.icon}</div>

            {/* Title & Price */}
            <h2 className="font-bold py-7 text-3xl text-center">{card.title}</h2>
            <p className="text-4xl py-2 font-bold text-center">{card.price}</p>

            {/* Features */}
            <div className="text-center font-medium">
              {card.features.map((feature, idx) => (
                <p key={idx} className="py-2 border-b mx-8">
                  {feature}
                </p>
              ))}
            </div>

            {/* Button */}
            <button
              className={`mt-8 w-[200px] py-3 my-6 rounded-md mx-auto cursor-pointer ${card.buttonStyle}`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

