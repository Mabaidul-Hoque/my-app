import React from "react";
import Image from "next/image";
import YourImage from "../../public/images/mobileimg.png";
import playStore from "../../public/images/googleplay.svg";
import Appstore from "../../public/images/appstore.svg";

function TwoEqualDivs() {
  return (
    <div className="flex flex-col  md:flex-row bg-[#F8F8F8] md:px-[90px] md:mt-24 w-full">
      <div className="md:hidden block mt-16 md:mt-24 mx-4">
        <p className="text-2xl font-semibold text-center">Download the App</p>
        <div className="btn-bottom flex justify-center gap-2 mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.unjected.app"
            className="inline-block"
          >
            <Image
              src={playStore}
              alt="Play Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>

          <a href="https://apps.apple.com/us/app/unjected/id1568168879">
            <Image
              src={Appstore}
              alt="App Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center mt-4">
        <Image
          src={YourImage}
          alt="Description of the image"
          className="w-full h-full"
          layout="responsive"
        />
      </div>

      <div className="flex-1 md:mx-32 mt-32 hidden md:block">
        <p className="text-3xl font-semibold text-center">Download the App</p>
        <div className="btn-bottom flex justify-center gap-2 mt-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.unjected.app"
            className="inline-block"
          >
            <Image
              src={playStore}
              alt="Play Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>

          <a href="https://apps.apple.com/us/app/unjected/id1568168879">
            <Image
              src={Appstore}
              alt="App Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TwoEqualDivs;
