import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPottedPlant } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="xl:px-48 lg:px-16 md:px-12 px-4 py-16 bg-[#F3FFFC]">
      {/* text */}
      <div className="flex flex-col items-center">
        <h1 className="font-steppe text-4xl text-[#004f44] font-medium">
          About Us
        </h1>
        <p className="font-steppe text-gray-600 text-center pt-4">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      {/* services */}
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 pt-8 md:space-y-0 space-y-8">
        {/* 1st */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-[#004f44] flex justify-center items-center rounded-[50%]">
            <LiaShippingFastSolid className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-medium font-steppe text-center">
            Large Assortment
          </p>
          <span className="text-center text-gray-600 font-steppe">
            we offer many different types of products with fewer variations in
            each category.
          </span>
        </div>
        {/* 2nd */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-[#004f44] flex justify-center items-center rounded-[50%]">
            <PiPottedPlant className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-medium font-steppe text-center">
            Fast & Free Shipping
          </p>
          <span className="text-center text-gray-600 font-steppe">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </span>
        </div>

        {/* 3rd */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-[#004f44] flex justify-center items-center rounded-[50%]">
            <BiPhoneCall className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl font-medium font-steppe text-center">
            24/7 Support
          </p>
          <span className="text-center text-gray-600 font-steppe">
            answers to any business related inquiry 24/7 and in real-time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
