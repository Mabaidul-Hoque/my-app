import React from "react";
import Image from "next/image";
import Realimg1 from "/public/assets/realimg1.png";
import Realimg2 from "/public/assets/realimg2.png";
import Realimg3 from "/public/assets/realimg3.png";

const profileImages = [
  { id: 1, imageUrl: Realimg1 },
  { id: 2, imageUrl: Realimg2 },
  { id: 3, imageUrl: Realimg3 },
];

const Realprofile = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)",
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4 md:py-10 lg:py-16 xl:py-20 md:px-10 w-full max-w-screen-2xl"
      style={gradientStyle}
    >
      <div className="text-left md:text-center  mb-10">
        <p className="text-xs md:text-base lg:text-lg font-bold uppercase py-1 text-[#F7A293]">
          Authenticity
        </p>
        <p className="text-[32px] lg:text-5xl md:text-3xl font-bold mb-5 leading-7 lg:leading-10">
          Real profiles, Real connections.
        </p>
        <p className="text-sm md:text-md lg:text-xl text-[#484848]">
          Our rigorous checks create a secure environment for you to find and
          connect with authentic individuals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-8 md:gap-5 w-full">
        {profileImages.map((image) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt="Placeholder"
            className="w-full h-full"
          />
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-full max-w-6xl md:gap-0">
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg1}
            alt="Placeholder"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg2}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg3}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Realprofile;
