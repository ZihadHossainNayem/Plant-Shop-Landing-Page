import React from "react";
import { BsArrowRight } from "react-icons/bs";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import pattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <div className="bg-[#004f44] text-white -mt-[120px] xl:px-48 lg:px-16 md:px-12 px-4">
      <div className="flex flex-col lg:grid grid-cols-5">
        {/* left */}
        <div className="lg:pr-16 col-span-2 h-screen flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-chillax md:text-6xl lg:text-7xl text-5xl text-center lg:text-left font-medium tracking-[0.3rem] pb-8">
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
        <div className="col-span-3 h-screen hidden lg:flex flex-col justify-center lg:items-end items-center">
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
              <div className="relative z-[10]">
                <img
                  src={image2}
                  alt=""
                  className="w-full h-[286px] object-cover"
                />
                <button className="font-steppe absolute top-2 right-2 bg-[#004f44] px-4 py-1 text-lg">
                  Popular
                </button>
              </div>
              <div className="absolute -bottom-9 -left-12 z-[1]">
                <img src={pattern} alt="" className="w-32 h-32" />
              </div>
            </div>
            {/* right */}
            <div className="col-span-7">
              <div className="relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#234A45] via-transparent to-transparent"></div>
                <img
                  src={image1}
                  alt=""
                  className="w-[470px] h-[580px] object-cover pl-2"
                />
                <button className="font-steppe absolute top-2 right-2 bg-[#004f44] px-4 py-1 text-lg">
                  Featured
                </button>

                {/*text and read more button */}
                <div className="absolute bottom-0 p-10">
                  <h1 className="font-steppe text-3xl font-light pb-2">
                    Anthurium Flower
                  </h1>
                  <p className="font-steppe font-thin pb-2">
                    The flower of human being. It has meaningful of fact that
                    the plant always grow whatever season and weather...
                  </p>
                  <div className="flex justify-center">
                    <button className="font-steppe font-light bg-white text-[#004f44] w-full py-3">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
