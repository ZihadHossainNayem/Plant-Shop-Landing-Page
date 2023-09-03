import React from "react";

import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#004f44] text-white xl:px-48 lg:px-16 md:px-12 px-4 py-12 flex md:flex-row flex-col justify-between">
      {/* left */}
      <div>
        <h1 className="md:text-2xl text-xl md:font-bold font-semibold">
          Plantify
        </h1>
        <p className="text-gray-300 py-4">
          We help you find <br /> your dream plant
        </p>
        <div className="flex gap-4 pt-2">
          <button>
            <AiFillInstagram className="w-6 h-6" />
          </button>
          <button>
            <AiOutlineTwitter className="w-6 h-6" />
          </button>
          <button>
            <AiFillFacebook className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* right */}
      <div className="flex md:gap-20 gap-6 pt-12 md:pt-0">
        <div>
          <h1 className="font-steppe text-lg pb-4">Information</h1>
          <div className="flex flex-col space-y-2">
            <a href="/about" className="text-gray-300">
              About
            </a>
            <a href="/product" className="text-gray-300">
              Product
            </a>
            <a href="/blog" className="text-gray-300">
              Blog
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-steppe text-lg pb-4">Company</h1>
          <div className="flex flex-col space-y-2">
            <a href="/about" className="text-gray-300">
              Community
            </a>
            <a href="/product" className="text-gray-300">
              Career
            </a>
            <a href="/blog" className="text-gray-300">
              Our Story
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-steppe text-lg pb-4">Contact</h1>
          <div className="flex flex-col space-y-2">
            <a href="/about" className="text-gray-300">
              Getting Started
            </a>
            <a href="/product" className="text-gray-300">
              Pricing
            </a>
            <a href="/blog" className="text-gray-300">
              Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
