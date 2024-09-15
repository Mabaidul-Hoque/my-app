import Image from "next/image";
import React from "react";

const ImageCard = ({ imageUrl, description, px, py, pt }) => {
  return (
    <div
      className={`flex justify-center items-center bg-[#F2F2F2] rounded-[28px] max-w-[314px] px-${px} py-${py} pt-${pt}`}
    >
      {imageUrl === "" ? (
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-2xl md:font-[500] font-normal`}
        >
          {description}
        </p>
      ) : (
        <Image
          src={imageUrl}
          alt={description}
          width={"100%"}
          height={"100%"}
        />
      )}
    </div>
  );
};

export default ImageCard;
