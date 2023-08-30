import React from "react";
import { BsSearch } from "react-icons/bs";
import filterSvg from "../assets/Group 35.svg";

const Search = () => {
  return (
    <div className="bg-[#F3FFFC] h-[230px] xl:px-48 lg:px-16 md:px-12 px-4 py-12 flex items-center gap-4">
      {/* filter */}
      <button className="border border-[#004f44] p-2 rounded">
        <img src={filterSvg} alt="" className="w-6 h-6" />
      </button>
      {/* search box */}
      <div className="flex-1 border border-[#004f44] rounded overflow-hidden">
        <input
          type="text"
          placeholder="search plant here...."
          className="w-full py-2 px-8 placeholder-[#004f44] placeholder:font-steppe"
        />
      </div>
      {/* search icon */}
      <button className="bg-[#004f44] p-2 rounded">
        <BsSearch className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Search;
