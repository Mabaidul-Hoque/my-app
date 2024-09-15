import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/bannerimg.png";

const HeroImageSection = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[600px] mt-12 md:mt-20 overflow-hidden">
      <Image
        src={HeroImage}
        alt="hero-image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute bottom-4 md:bottom-5 lg:bottom-10 px-4 md:px-8 lg:px-16 text-white text-center w-full flex justify-center items-center flex-col z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          The World's First <span className="text-[#F7A293]">Unvaccinated</span>{" "}
          Platform
        </h1>
        <p className="text-xs  md:text-base lg:text-lg mt-2">
          Love, Friendship and Community connections since 2021
        </p>
      </div>
    </div>
  );
};

export default HeroImageSection;
