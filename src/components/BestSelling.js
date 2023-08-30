import React from "react";
import frame7 from "../assets/Frame 7.png";
import frame8 from "../assets/Frame 8.png";
import frame9 from "../assets/Frame 9.png";
import { BsArrowRight } from "react-icons/bs";

const BestSelling = () => {
  return (
    <div className="xl:px-48 lg:px-16 md:px-12 px-4 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* text grid */}
        <div className="space-y-4 w-auto h-[350px]  pr-4 md:pr-8">
          <h1 className="text-4xl font-steppe font-medium text-[#004f44]">
            Best Selling Plants
          </h1>
          <p className="text-gray-600 font-steppe">
            Easiest way to healthy life by buying your favorite plants{" "}
          </p>
          <button className="font-steppe flex items-center gap-2 bg-[#004f44] px-4 py-2 rounded text-white w-36">
            See more <BsArrowRight />
          </button>
        </div>
        {/* img grid */}
        <div className="cursor-pointer">
          <img src={frame7} alt="" className="w-auto h-[350px] object-cover" />
          <p className="font-steppe font-medium pt-4">Natural Plant</p>
          <p className="font-steppe text-gray-500">$50</p>
        </div>
        <div className="cursor-pointer">
          <img src={frame8} alt="" className="w-auto h-[350px] object-cover" />
          <p className="font-steppe font-medium pt-4">Artificial Plant</p>
          <p className="font-steppe text-gray-500">$35</p>
        </div>
        <div className="cursor-pointer">
          <img src={frame9} alt="" className="w-auto h-[350px] object-cover" />
          <p className="font-steppe font-medium pt-4">Artificial Plant</p>
          <p className="font-steppe text-gray-500">$25</p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
