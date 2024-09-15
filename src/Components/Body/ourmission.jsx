import React from "react";

const TwoSectionLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-10  px-4 sm:px-10 md:px-20 lg:px-20 py-10 md:py-14 lg:py-16 max-w-screen-2xl">
      <div className="flex-1 flex flex-col">
        <p className="text-xs md:text-sm lg:text-base font-bold mb-2 text-[#F7A293] uppercase">
          Our Mission
        </p>
        <p className="text-[32px] md:text-3xl lg:text-4xl xl:text-[52px] font-bold leading-7 lg:leading-[50px]">
          Make value-based connections on Unjected
        </p>
      </div>

      <div className="flex-1 flex flex-col items-start justify-center gap-5 text-sm lg:text-xl text-[#484848] leading-4">
        <p className="mb-2">
          Unjected is built on creating health-conscious relationships with
          those who share like-minded values and the convictions to remain
          unvaccinated.
        </p>
        <p className="">
          Our advanced algorithm delivers matches that are not just close, but
          aligned with your desires.
        </p>
      </div>
    </div>
  );
};

export default TwoSectionLayout;
