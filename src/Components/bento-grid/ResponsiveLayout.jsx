import React from "react";
import friendsImage01 from "../../assets/bento-grid/Frame 1171282975.png";
import friendsImage02 from "../../assets/bento-grid/Frame 1171282981.png";
import iPhone15pro from "../../assets/bento-grid/iPhone-5-Pro-Black-Titanium-Mockup-Portrait.png";
import photoCollage1 from "../../assets/bento-grid/Rectangle 40711.png";
import photoCollage4 from "../../assets/bento-grid/Frame 1171282976.png";
import friendsImage03 from "../../assets/bento-grid/image 78.png";
import ImageCard from "./ImageCard";

function ResponsiveLayout() {
  return (
    <div className=" p-2 sm:p-2 md:p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col items-center justify-between xl:gap-4 h-full">
            <ImageCard
              imageUrl={""}
              description="Expand your circle,  one friend at a time"
              px="4"
              py="5"
              pt=""
            />
            <ImageCard
              imageUrl={friendsImage01}
              description="friendsImage01"
              px=""
              py=""
              pt=""
            />
            <ImageCard
              imageUrl={friendsImage02}
              description="friendsImage02"
              px=""
              py=""
              pt=""
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 h-full">
            <ImageCard
              imageUrl={iPhone15pro}
              description="iPhone15pro"
              px="4"
              py="0"
              pt="5"
            />
            <ImageCard
              imageUrl={""}
              description={
                <>
                  Meet friends, share laughs -{" "}
                  <span className="text-[#F7A293] font-bold">Unjected</span> is
                  your social hub
                </>
              }
              px="4"
              py="5"
              pt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2  gap-4 xl:gap-4 h-full">
          <div className="flex flex-col items-center justify-between">
            <ImageCard
              imageUrl={photoCollage1}
              description="photoCollage1"
              px=""
              py=""
              pt=""
            />
            <ImageCard
              imageUrl={""}
              description={
                <>
                  Switch to{" "}
                  <span className="text-[#F7A293] font-bold">dating</span> and
                  find your match
                </>
              }
              px="4"
              py="5"
              pt=""
            />
            <ImageCard
              imageUrl={photoCollage4}
              description="photoCollage4"
              px=""
              py=""
              pt=""
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <ImageCard
              imageUrl={""}
              description={
                <>
                  Discover true romance with {" "}
                  <span className="text-[#F7A293] font-bold">
                    Unjected’s
                  </span>{" "}
                  is dating possibilities.
                </>
              }
              px="4"
              py="5"
              pt=""
            />
            <ImageCard
              imageUrl={friendsImage03}
              description="friendsImage03"
              px="4"
              py="0"
              pt="5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
