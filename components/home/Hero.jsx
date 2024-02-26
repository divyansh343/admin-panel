import Image from "next/image";
import React from "react";
import header from "../../assets/brand_header.png";

const Hero = () => {
  return (
    <div>
      <section className=" pb-24">
      
        <div className="relative pt-12 md:pt-24">
          <div className="container px-4 mx-auto">
            <div className="relative max-w-lg md:max-w-3xl mx-auto text-center">
              <h1 className="tracking-tight text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6">
                <span className="leading-none">Content writing,</span>
                <span className="text-gray-400">
                  <br />
                  with a <span className="underline">twist</span>.
                </span>
              </h1>
              <p className="md:max-w-md lg:max-w-lg mx-auto text-lg text-gray-400 mb-10">
                We hired the top 1% of writers so you don&apos;t have to. Get
                high quality articles &amp; posts in just 3 days.
              </p>
              <div className="xs:flex items-center max-w-md mx-auto mb-6">
                <input
                  className="w-full h-12 mb-3 xs:mb-0 xs:mr-3 p-3 text-gray-400 placeholder-gray-500 bg-gray-800 outline-none ring ring-transparent focus:ring-yellowGreen-700 rounded-lg"
                  type="email"
                  placeholder="Your email"
                  id="email"
                />

                <button
                  className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-900 bg-primary rounded-lg transition-all duration-300 focus:outline-none"
                  type="submit"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                  <span>Get Started</span>
                </button>
              </div>
              <div className="flex flex-col xs:flex-row items-center justify-center">
                <span className="block text-sm text-gray-400 opacity-50">
                  7-day money-back guarantee
                </span>
                <span className="inline-block my-4 xs:my-0 mx-auto xs:mx-4">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3008_28918)">
                      <mask
                        id="mask0_3008_28918"
                        // style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="12"
                        height="12"
                      >
                        <path d="M12 0H0V12H12V0Z" fill="white"></path>
                      </mask>
                      <g mask="url(#mask0_3008_28918)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6L4.57763e-07 0H6H12V6C8.6868 6 6.00078 3.3145 6 0.00143555C5.99922 3.3145 3.31322 6 0 6ZM6 12C6 8.68626 8.68632 6 12 6V12H6ZM6 12C6 8.68626 3.31371 6 0 6V12H6Z"
                          fill="#4B6354"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="block text-sm text-gray-400 opacity-50">
                  Unlimited revisions
                </span>
              </div>
            </div>

            <Image height={600} width={1100} className="block mx-auto mt-12 md:mt-28 xl:-6" src={header} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
