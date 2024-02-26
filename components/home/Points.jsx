import Image from "next/image";
import React from "react";
import right from "../../assets/right-dark.png";


const Points = () => {
  return (
    <div>
      <section className="pb-16 " id="how-it-works">
        <div className="container bg-base-100 px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-24">
            <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-primary bg-base-200 rounded-full">
              HOW IT WORKS
            </span>
            <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-primary">
              Replace expensive in-house teams &amp; unreliable freelancers with
              a flat monthly fee
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
                          No more hiring, managing, or dealing with writers
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          We take care of all of the comms &amp; busywork for
                          you.
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
                          Extraordinarily simple to use
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Add your style guide and keyword(s) &amp; well take
                          care of the rest.
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
                          Completely risk free with unlimited revisions
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Dont love your content? Well rewrite it until you do.
                        </p>
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
