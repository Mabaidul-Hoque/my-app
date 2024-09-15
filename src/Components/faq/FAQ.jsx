"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const faqs = [
  {
    id: 1,
    title: "Is Unjected a dating app?",
    description:
      "Yes, and more! Unjeced was desgined for Love, friendship & community. Curate your experience based on what your looking for.",
  },
  {
    id: 2,
    title: "How do you make sure members are unvaccinated?",
    description:
      "Since the beginning, Unjected has believed the healthiest realtionships have a foundation of trust, and we have operated on an honor system. However, for our members who want the most safety and security in choosing their future partner, we recommend our 'Unjected Verified' upgrade. Unjected verified members attest to their unvaccination by affidavit.",
  },
  {
    id: 3,
    title: "Do you sell data?",
    description: "No, Unjected will never sell your data to anyone.",
  },
  {
    id: 4,
    title: "Is it just for covid-19 unvaccinated or all vaccines?",
    description:
      "While we do not support vaccination of any kind, Unjected is specifically tailored for Covid-19 unvaccinated or any mRNA based injection.",
  },
  {
    id: 5,
    title: "Can I browse Unjected without signing up?",
    description:
      "You can browse with limited access. For the full Unjected experience, we ask that you please support our mission.",
  },
];

const FAQs = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="p-2 w-full">
        <h2 className="font-bold text-[32px] text-center my-4">
          {screenSize < 640 ? "FAQ" : "Frequently Asked Questions"}
        </h2>

        <div className="flex justify-center items-center md:px-8 lg:px-16 lg:py-4">
          <div className="flex flex-col gap-5 bg-gradient-to-r from-[#F7A29326] to-[#F1630826] max-w-5xl w-full rounded-3xl p-4 lg:p-8">
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                className={`${
                  idx < faqs.length - 1 ? "border-b pb-4" : "pb-4"
                }`}
              >
                <div className="flex justify-start items-center gap-4 ">
                  {openIndexes.includes(idx) ? (
                    <AiOutlineMinus
                      size={24}
                      onClick={() => toggleFAQ(idx)}
                      className=" text-[#cb4932] bg-gradient-to-r from-[#f1442626] to-[#f56b53] bg-clip-text cursor-pointer"
                    />
                  ) : (
                    <BsPlus
                      size={24}
                      onClick={() => toggleFAQ(idx)}
                      className=" text-[#cb4932]  bg-gradient-to-r from-[#f1442626] to-[#f56b53] bg-clip-text cursor-pointer"
                    />
                  )}
                  <h2 className="text-base md:text-lg lg:text-xl font-normal bg-gradient-to-r from-[#ec9f9f] to-[#f56b53] text-transparent bg-clip-text">
                    {faq.title}
                  </h2>
                </div>
                {openIndexes.includes(idx) && (
                  <div className="mt-2">
                    <p className="text-[#484848] text-sm md:text-base pl-8 font-normal">
                      {faq.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
