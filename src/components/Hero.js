import React from "react";
import { BsArrowRight } from "react-icons/bs";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";

const Hero = () => {
  return (
    <div className="bg-[#004f44] text-white -mt-[120px] xl:px-48 lg:px-16 md:px-12 px-4">
      <div className="flex flex-col lg:grid grid-cols-5">
        {/* left */}
        <div className="lg:pr-16 col-span-2 h-screen flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-chillax md:text-7xl text-5xl text-center lg:text-left font-medium tracking-[0.3rem] pb-8">
            Happiness blooms from within
          </h1>
          <p className="font-steppe md:text-xl text-base text-center lg:text-left font-light pb-8">
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <div className="flex gap-8">
            <button className="bg-white text-[#004f44] md:text-xl text-base md:px-12 px-4 md:py-5 py-3">
              Shop now
            </button>
            <button className="flex font-steppe  items-center md:text-xl text-base gap-2 md:px-12 px-4 md:py-5 py-3">
              Explore plant
              <BsArrowRight />
            </button>
          </div>
        </div>

        {/* right */}
        <div className="col-span-3 h-screen hidden md:flex flex-col justify-center lg:items-end items-center">
          <div className="grid grid-cols-12 ">
            {/* white grid */}
            <div className="col-span-1 hidden lg:flex"></div>
            {/* left */}
            <div className="lg:col-span-4 col-span-5 space-y-2 relative">
              <div className="relative ">
                <img
                  src={image3}
                  alt=""
                  className="w-full h-[286px] object-cover"
                />
                <button className="font-steppe absolute top-2 right-2 bg-[#004f44] px-4 py-1 text-lg">
                  New
                </button>
              </div>
              <div className="relative ">
                <img
                  src={image2}
                  alt=""
                  className="w-full h-[286px] object-cover"
                />
                <button className="font-steppe absolute top-2 right-2 bg-[#004f44] px-4 py-1 text-lg">
                  Popular
                </button>
              </div>
            </div>
            {/* right */}
            <div className="col-span-7">
              <div className="relative">
                <img
                  src={image1}
                  alt=""
                  className="w-[470px] h-[580px] object-cover pl-2"
                />
                <button className="font-steppe absolute top-2 right-2 bg-[#004f44] px-4 py-1 text-lg">
                  Featured
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
