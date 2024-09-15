"use client";
import React from "react";
import starImage from "../../assets/star.svg";
import Image from "next/image";

const ReviewCard = ({ rating, title, description, active }) => {
  return (
    <div
      className={`${active} flex flex-1 flex-col justify-center items-center gap-2 border rounded-[12px] md:rounded-[28px] p-2 max-w-80 h-52`}
    >
      <div className="flex justify-center items-center gap-3">
        <Image
          className="w-[24px] h-[24px]"
          src={starImage}
          height={"100%"}
          alt="star"
          width={"100%"}
        />
        <p className="w-[24px] h-[24px]">{rating}</p>
      </div>
      <p className="font-bold">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ReviewCard;
