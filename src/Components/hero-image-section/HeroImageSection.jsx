import Image from "next/image";
import React from "react";
import heroImage from "../../assets/hero-image.png";

const HeroImageSection = () => {
  return (
    <div className="relative w-full max-w-screen-2xl flex items-center justify-center">
      <Image
        className="w-full"
        src={heroImage}
        height={"100%"}
        alt="hero-image"
        width={"100%"}
      />

      {/* Text Container */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-auto mb-6 lg:mb-32">
        <h1 className="text-md sm:text-[32px] font-bold md:text-[48px] lg:text-[56px] xl:text-[68px] max-w-52 md:max-w-xl lg:max-w-4xl xl:max-w-7xl">
          The World's First <span className="text-[#F7A293]">Unvaccinated</span>{" "}
          Platform
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-60 md:max-w-xl lg:max-w-4xl">
          Love, Friendship and Community connections since 2021
        </p>
      </div>
    </div>
  );
};
export default HeroImageSection;
