import React from "react";
import PlantCard from "./PlantCard";
import { FeaturedData } from "../Data/FeaturedData";

const Featured = () => {
  const handlePrev = () => {
    const slider = document.querySelector(".slide-content");
    const width = 312;
    slider.scrollLeft -= width;
  };

  const handleNext = () => {
    const slider = document.querySelector(".slide-content");
    const width = 312;
    slider.scrollLeft += width;
  };

  return (
    <div className="xl:px-48 lg:px-16 md:px-12 px-4 py-12">
      {/* featured title, view all button */}
      <div className="flex justify-between">
        <h1 className="font-steppe text-4xl text-[#004f44]">Featured</h1>
        <button className="font-steppe text-xl text-[#004f44]">view all</button>
      </div>
      {/* full slider */}
      <div className="relative overflow-hidden">
        {/* slider  buttons  */}
        <div className="flex">
          <button
            onClick={handlePrev}
            className="bg-white/70 border w-12 h-12 rounded-[50%] 
          flex items-center justify-center absolute top-[35%] left-2"
          >
            <p className="text-[#004f44] text-4xl font-semibold">&lt;</p>
          </button>
          <button
            onClick={handleNext}
            className="bg-white/70 border w-12 h-12  rounded-[50%] 
          flex items-center justify-center absolute top-[35%] right-2"
          >
            <p className="text-[#004f44] text-4xl font-semibold">&gt;</p>
          </button>
        </div>

        {/* slider content*/}
        <div className="py-8">
          <div className="flex gap-8 overflow-x-hidden slide-content">
            {FeaturedData.map((item) => (
              <PlantCard key={item.id} featuredData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
