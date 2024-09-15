"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Meetimg1 from "../../public/images/meetimg1.png";
import Meetimg2 from "../../public/images/meetimg2.png";
import Meetimg3 from "../../public/images/meetimg3.png";

const Speeddating = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 w-full py-10 lg:py-16 md:px-10 max-w-screen-2xl">
      <div className="text-left sm:text-center max-w-full md:max-w-2xl sm:px-20 md:px-0">
        <p className="text-xs md:text-sm lg:text-base text-[#F7A293] font-bold">
          SPEED DATING
        </p>
        <p className="text-2xl leading-8 md:text-3xl lg:text-5xl font-bold mb-4">
          {screenSize < 640
            ? "Meet, Engage, Connect Dive into Our  Events!"
            : "Meet Genuine Connections: Dive into Our Exciting Events!"}
        </p>
        <p className="text-sm md:text-base lg:text-xl">
          Step beyond the screen and connect in real life! Our exclusive events
          allow you to meet and mingle with other members in a relaxed, social
          setting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg1}
            alt="Speak to new potential matches"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center leading-5">
            Speak to new potential matches
          </p>
          <p className="text-sm text-center">
            You’ll have various Events to attend to connect and get to know each
            other.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg2}
            alt="Video or voice - it’s your choice"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center">
            Video or voice - it’s your choice
          </p>
          <p className="text-sm text-center  leading-5">
            Calls will always begin with voice. If the call is going well, take
            it to the next level with video.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg3}
            alt="You’re in control of each call"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center">
            You’re in control of each call
          </p>
          <p className="text-sm text-center leading-5">
            You decide what happens during each call. If you both like each
            other.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speeddating;
