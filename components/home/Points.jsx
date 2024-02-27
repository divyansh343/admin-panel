import Image from "next/image";
import React from "react";
import right from "../../assets/right-dark.png";
import Wrapper from "../Wrapper";


const Points = () => {
  return (
    <div>
      <section className="pb-16 " id="how-it-works">
        <div className="container bg-base-100 px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-24">
            <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-primary bg-base-200 rounded-full">
            Simplify Your Trading            </span>
            <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-primary">
            Easy Journaling 
            </h1>
          </div>
          <div className="max-w-lg lg:max-w-5xl xl:max-w-7xl mx-auto">
            <div className="px-2 py-10 rounded-xl border border-base-200">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 lg mb-12 lg:mb-0">
                  <div className="max-w-lg mx-auto">
                    <button className="group flex items-center text-left py-6 rounded-xl hover:bg-base-200 px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="relative flex-shrink-0 inline-flex w-12 h-12 mr-4 items-center justify-center font-bold text-primary bg-base-200 border border-gray-700 rounded-full transition duration-200">
                        <span className="relative z-10 text-primary">1</span>
                        {/* 
      <img className="hidden group-hover:block absolute top-0 left-0 w-full h-full" src="aurora-assets/how-it-works/bg-gradient-circle.svg" alt=""> */}
                      </div>
                      <div className="block">
                        <p className="text-primary font-bold text-md">
                        Multiple Accounts support
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                        manage and monitor multiple trading accounts with Trade Os
                        </p>
                      </div>
                    </button>
                    <button className="group flex items-center text-left py-6 rounded-xl hover:bg-base-200 px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="relative flex-shrink-0 inline-flex w-12 h-12 mr-4 items-center justify-center font-bold text-primary bg-base-200 border border-gray-700 rounded-full transition duration-200">
                        <span className="relative z-10 text-primary">2</span>
                        {/* <img className="hidden group-hover:block absolute top-0 left-0 w-full h-full" src="aurora-assets/how-it-works/bg-gradient-circle.svg" alt=""> */}
                      </div>
                      <div className="block">
                        <p className="text-primary font-bold text-md">
                        Performance Analytics
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                        track performance, assess strategies, make data-driven decisions, to a strategic approach to trading.
                        </p>
                      </div>
                    </button>
                    <button className="group flex items-center text-left py-6 rounded-xl hover:bg-base-200 px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="relative flex-shrink-0 inline-flex w-12 h-12 mr-4 items-center justify-center font-bold text-primary bg-base-200 border border-gray-700 rounded-full transition duration-200">
                        <span className="relative z-10 text-primary">3</span>
                        {/* <Image className="hidden group-hover:block absolute top-0 left-0 w-full h-full" src="aurora-assets/how-it-works/bg-gradient-circle.svg" alt="" /> */}
                      </div>
                      <div className="block">
                        <p className="text-primary font-bold text-md">
                        Flexible Data Export Options                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                        Users can conveniently export their trade records in both PDF and Excel formats.                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <Image height={400} width={500} className="block w-full max-w-sm mx-auto lg:ml-auto" src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Points;
