import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import mobileImage from "../../public/images/downloadimg.svg";
import toggler from "../../public/images/toggler.svg";

function Header() {
  return (
    <header
      className={`sticky bg-white left-0 top-0 w-full max-w-screen-2xl flex justify-between items-center px-4 sm:px-6 xl:px-11 h-[68px] z-20`}
    >
      <div className="flex items-center">
        <a href="/">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </a>
      </div>

      <div className="space-x-4 hidden md:flex">
        <button className="bg-[#000000] text-white px-4 py-2 rounded hover:bg-[#000000]">
          Login
        </button>
        <button className="bg-[#F7A293] text-white px-5 py-2 rounded hover:bg-[#F7A293]">
          Download now
        </button>
      </div>

      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
        <Image
          src={toggler}
          alt="Mobile View Image"
          width={25}
          height={25}
          className="object-contain"
        />
        <a href="/">
          <Image
            src={mobileImage}
            alt="Mobile View Image"
            width={25}
            height={25}
            className="object-contain"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
