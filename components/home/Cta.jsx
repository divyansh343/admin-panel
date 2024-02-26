import Image from "next/image";
import React from "react";
import light from "../../assets/line-green-bottom.png"
import line from "../../assets/light-green-bottom.png"

const Cta = () => {
  return (
    <div>
      <section className="py-12 md:py-24 ">
        <div className="container px-4 mx-auto">
          <div className="relative pb-16 border-b border-yellowGreen-900 border-opacity-50 overflow-hidden">
             <Image className="absolute bottom-0 left-1/2 md:-mb-2 lg:-mb-20 transform -translate-x-1/2 opacity-20" src={line} alt="" />
            <Image className="absolute bottom-0 left-1/2 -mb-5 sm:-mb-10 md:-mb-16 lg:-mb-28 transform -translate-x-1/2 opacity-20" src={light} alt="" />

            <div className="relative max-w-sm md:max-w-xl mx-auto text-center">
              <span className="inline-flex items-center h-6 mb-4 px-2 text-sm font-medium text-white bg-base-200 rounded-full">
                Get Started
              </span>
              <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-white mb-10">
                Outsource your writing and build a reliable content machine.
              </h1>
              <a
                className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-sm  bg-primary text-primary-content rounded-lg transition-all duration-300"
                href="https://app.Tokyo.com"
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                <span className="mr-2">Start your no-risk trial</span>
                <span className="transform group-hover:translate-x-1 transition duration-200">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 8H12.8333M12.8333 8L8.83334 4M12.8333 8L8.83334 12"
                      stroke="#041109"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
