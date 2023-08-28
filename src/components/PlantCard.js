import React from "react";
import PotColorPicker from "./PotColorPicker";

const PlantCard = ({ featuredData }) => {
  const { img, name, price } = featuredData;
  return (
    <div className="min-w-[280px]">
      {/* image */}
      <div>
        <img src={img} alt="" className="w-[280px] h-[380px]" />
      </div>

      {/*  text */}
      <div>
        {/* title, price */}
        <div className="pt-3 flex justify-between text-[#004f44]">
          <h1 className="font-steppe text-lg">{name}</h1>
          <p className="font-steppe text-lg">${price}</p>
        </div>
        {/* color picker, button */}
        <div className="pt-4 flex justify-between scroll-smooth">
          <div>
            <p className="font-steppe text-sm text-gray-400 pb-1">Pot color</p>
            <PotColorPicker />
          </div>
          <button className="px-5 font-steppe bg-white hover:bg-[#004f44] text-[#004f44] hover:text-white border-2 border-[#004f44]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
