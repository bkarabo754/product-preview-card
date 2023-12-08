import React from "react";
import IconReaction from "./assets/images/icon-reaction.svg";
import IconMemory from "./assets/images/icon-memory.svg";
import IconVerbal from "./assets/images/icon-verbal.svg";
import IconVisual from "./assets/images/icon-visual.svg";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const fadeInFromLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const fadeInFromTopVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const fadeInTransition = { duration: 0.6, ease: "easeInOut" };

const Results = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-pale-blue overflow-hidden">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] md:mt-20 mt-0 xl:w-[650px] h-[410px] md:py-0 mb-[428px] sm:mb-10 md:mb-20 bg-white rounded-3xl shadow-2xl flex flex-col sm:flex-row">
          <motion.aside
            variants={
              window.innerWidth >= 1024
                ? fadeInFromLeftVariants
                : fadeInFromTopVariants
            }
            initial="hidden"
            animate="show"
            exit="hidden" // If you want to handle exit animations
            transition={fadeInTransition}
            className="px-4 py-12 md:py-9 bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-full sm:w-1/2 rounded-tl-none sm:rounded-tl-3xl rounded-br-3xl sm:rounded-br-none sm:rounded-bl-3xl rounded-b-3xl font-hanken flex flex-col items-center justify-between gap-4"
          >
            <div className="text-gray-300 text-sm font-bold">Your Results</div>
            <div className="gap-2 w-44 h-44 flex flex-col items-center justify-center rounded-full text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark">
              <span className="text-4xl font-bold">76</span>{" "}
              <span className="text-gray-400 text-xs">of 100</span>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="text-white text-xl font-semibold py-2 mb-5">
                Great
              </div>
              <div className="text-gray-300 text-center text-md">
                You scored higher than 65% of the people who have taken these
                tests.
              </div>
            </div>
          </motion.aside>
          <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between gap-3">
            <h1 className="text-lg font-bold">Summary</h1>

            <ul className="flex flex-col gap-3 mb-3">
              <li className="bg-light-red-light justify-between flex rounded-md p-3 hover:bg-red-200 cursor-pointer">
                <div className="flex gap-2">
                  <img src={IconReaction} alt="Icon React" />
                  <span className="text-light-red-default">Reaction</span>
                </div>
                <div>
                  80 <span className="text-gray-500">/ 100</span>
                </div>
              </li>

              <li className="bg-orangey-yellow-light justify-between flex rounded-md p-3 hover:bg-yellow-200 cursor-pointer">
                <div className="flex gap-2">
                  <img src={IconMemory} alt="Icon Memory" />
                  <span className="text-orangey-yellow-default">Memory</span>
                </div>
                <div>
                  92 <span className="text-gray-500">/ 100</span>
                </div>
              </li>

              <li className="bg-green-teal-light justify-between flex rounded-md p-3 hover:bg-green-200 cursor-pointer">
                <div className="flex gap-2">
                  <img src={IconVerbal} alt="Icon Verbal" />
                  <span className="text-green-teal-default">Verbal</span>
                </div>
                <div>
                  61 <span className="text-gray-500">/ 100</span>
                </div>
              </li>

              <li className="bg-cobalt-blue-light justify-between flex rounded-md p-3 hover:bg-blue-200 cursor-pointer">
                <div className="flex gap-2">
                  <img src={IconVisual} alt="Icon Visual" />
                  <span className="text-cobalt-blue-default">Visual</span>
                </div>
                <div>
                  72 <span className="text-gray-500">/ 100</span>
                </div>
              </li>
            </ul>

            <button className="w-full text-sm font-semibold bg-dark-gray-blue px-4 py-3 md:py-3 mb-5 text-pale-blue rounded-3xl">
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Results;
