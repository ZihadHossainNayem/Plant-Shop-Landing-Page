import React from "react";
import frame37 from "../assets/Frame 37.png";
import frame36 from "../assets/Frame 36.png";
import frame38 from "../assets/Frame 38.png";

const Categories = () => {
  return (
    <div className="xl:px-48 lg:px-16 md:px-12 px-4 py-20 ">
      {/* text */}
      <div className="flex flex-col items-center">
        <h1 className="font-steppe text-4xl text-[#004f44] font-medium">
          Categories
        </h1>
        <p className="font-steppe text-gray-600 text-center pt-4">
          Find what you are looking for
        </p>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8 justify-between ">
        {/* 1st */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <img
            src={frame36}
            alt=""
            className="h-[500px] w-[350px] object-cover rounded-xl"
          />
          <h1 className="font-steppe font-medium pt-4 text-center">
            Natural Plants
          </h1>
        </div>
        {/* 2nd */}
        <div className="flex flex-col justify-center items-center md:pt-32 pt-0  cursor-pointer">
          <img
            src={frame37}
            alt=""
            className="h-[500px] w-[350px] object-cover rounded-xl"
          />
          <h1 className="font-steppe font-medium pt-4 text-center">
            Plant Accessories
          </h1>
        </div>
        {/* 3rd */}
        <div className="flex flex-col justify-center items-center  cursor-pointer">
          <img
            src={frame38}
            alt=""
            className="h-[500px] w-[350px] object-cover rounded-xl"
          />
          <h1 className="font-steppe font-medium pt-4 text-center">
            Artificial Plants
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
