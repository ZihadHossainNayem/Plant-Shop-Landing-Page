import React, { useState } from "react";
import { PiPottedPlantBold } from "react-icons/pi";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  /* product dropdown state */
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setShowProductDropdown(!showProductDropdown);
  };

  return (
    <div className="bg-[#004f44] text-white h-[80px] lg:px-48 md:px-12 px-4 flex justify-between items-center">
      {/* left section */}
      <div className="flex items-center gap-2">
        <PiPottedPlantBold className="md:w-8 md:h-8 w-6 h-6" />
        <span className="md:text-2xl text-xl md:font-bold font-semibold">
          Plantify
        </span>
      </div>

      {/* middle section */}
      <div className="hidden md:flex gap-8">
        <a href="/shop">Shop</a>
        <div className="relative">
          <a
            href="/products"
            onClick={toggleProductsDropdown}
            className="flex items-center gap-1"
          >
            Products <AiFillCaretDown size={13} />
          </a>
          {showProductDropdown && (
            <ul className="absolute top-6 left-0 bg-white border rounded-lg p-2 text-[#004f44] w-40 space-y-4">
              <li>
                <a href="/plant-care">Plant Care</a>
              </li>
              <li>
                <a href="/pot-containers">Pots & Containers</a>
              </li>
              <li>
                <a href="/seeds">Seeds</a>
              </li>
              <li>
                <a href="/Tools">Tools</a>
              </li>
            </ul>
          )}
        </div>
        <a href="/fetilizer">Fertilizer</a>
        <a href="/guide">Guide</a>
      </div>

      {/* right section */}
      <div className="flex gap-6">
        <BsSearch className="w-5 h-5 cursor-pointer" />
        <FiUser className="w-5 h-5 cursor-pointer" />
        <BsCart3 className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
