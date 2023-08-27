import React, { useState } from "react";
import { PiPottedPlantBold } from "react-icons/pi";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineScissor,
  AiOutlineRead,
} from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { RiMedicineBottleLine, RiSeedlingLine } from "react-icons/ri";
import { PiPottedPlant } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";

const Navbar = () => {
  /* product dropdown state */
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setShowProductDropdown(!showProductDropdown);
  };

  /* product dropdown state for mobile*/
  const [mobileShowProduct, setMobileShowProduct] = useState(false);

  /* mobile side menu state */
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="bg-[#004f44] text-white h-[120px] xl:px-48 lg:px-16 md:px-12 px-4 flex justify-between items-center">
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
            Products
            {showProductDropdown ? (
              <AiFillCaretUp size={13} />
            ) : (
              <AiFillCaretDown size={13} />
            )}
          </a>
          {showProductDropdown && (
            <ul className="absolute top-8 left-0 bg-white border rounded-lg p-2 text-[#004f44] w-40 space-y-4">
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
        <a href="/fertilizer">Fertilizer</a>
        <a href="/guide">Guide</a>
      </div>

      {/* right section */}
      <div className="flex gap-6">
        <BsSearch className="w-5 h-5 cursor-pointer" />
        <FiUser className="w-5 h-5 cursor-pointer" />
        <BsCart3 className="w-5 h-5 cursor-pointer" />

        {/* mobile menu */}
        <div className="flex md:hidden items-center z-[200]">
          <AiOutlineMenu
            onClick={() => setSideMenu(!sideMenu)}
            className="w-5 h-5 cursor-pointer"
          />

          {sideMenu && (
            <div className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0"></div>
          )}
          {/* mobile side menu */}
          <div
            className={
              sideMenu
                ? "fixed top-0 right-0 w-[330px] rounded-l-lg h-screen z-10 bg-white duration-300"
                : "fixed top-0 right-[-100%] w-[330px] rounded-l-lg h-screen z-10 bg-white duration-300"
            }
          >
            {/* close icon */}
            <div
              onClick={() => setSideMenu(!sideMenu)}
              className="text-black absolute top-[24px] right-[24px] w-[40px] h-[40px] flex items-center justify-center"
            >
              <IoCloseSharp size={30} />
            </div>
            <div className="pl-[24px] pr-[24px] pt-[24px] pb-[120px]">
              {/* menus */}
              <div className="flex flex-col text-black mt-12 text-xl">
                <a href="/shop" className="mb-8 flex items-center gap-4">
                  <AiOutlineShopping /> Shop
                </a>
                <div
                  onClick={() => {
                    setMobileShowProduct(!mobileShowProduct);
                  }}
                  className="flex mb-8 items-center gap-4"
                >
                  <BiCategory />
                  <span className="flex gap-1 items-center">
                    Products{" "}
                    {mobileShowProduct ? (
                      <AiFillCaretUp size={13} />
                    ) : (
                      <AiFillCaretDown size={13} />
                    )}
                  </span>
                </div>
                {mobileShowProduct && (
                  <div className="flex flex-col ml-4">
                    <a
                      href="/plant-care"
                      className="mb-4 flex items-center gap-4"
                    >
                      <RiMedicineBottleLine /> Plant Care
                    </a>
                    <a
                      href="/pot-containers"
                      className="mb-4 flex items-center gap-4"
                    >
                      <PiPottedPlant /> Pots & Containers
                    </a>
                    <a href="/seeds" className="mb-4 flex items-center gap-4">
                      <RiSeedlingLine /> Seeds
                    </a>
                    <a href="/Tools" className="mb-8 flex items-center gap-4">
                      <AiOutlineScissor /> Tools
                    </a>
                  </div>
                )}
                <a href="/fertilizer" className="mb-8 flex items-center gap-4">
                  <GiMedicines /> Fertilizer
                </a>
                <a href="/guide" className="mb-8 flex items-center gap-4">
                  <AiOutlineRead /> Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
