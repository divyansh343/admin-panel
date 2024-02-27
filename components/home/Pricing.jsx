import React from "react";

const Pricing = () => {
  return (
    <div>
      <section className="py-12 md:py-24 " id="pricing">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm md:max-w-md lg:max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold  mb-4">
                Affordable bulk pricing
              </h1>
              <p className="text-lg ">
                Our content scales with your business.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-12 lg:mb-0 md:px-4">
                <div className="p-8 mb-10 bg-base-100/90 border border-primary rounded-xl shadow-lg">
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3.6V14.4C15 14.7314 14.7314 15 14.4 15H3.6C3.26863 15 3 14.7314 3 14.4V3.6C3 3.26863 3.26863 3 3.6 3H14.4C14.7314 3 15 3.26863 15 3.6Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.5 21H16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 13.5V16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 19.5V20.4C21 20.7314 20.7314 21 20.4 21H19.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10.5 21H9.6C9.26863 21 9 20.7314 9 20.4V19.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M19.5 9H20.4C20.7314 9 21 9.26863 21 9.6V10.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16.5 9H9.6C9.26863 9 9 9.26863 9 9.6V16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-base font-semibold  uppercase">
                      Starter
                    </span>
                  </div>
                  <div className="flex items-end mb-4">
                    <span className="mr-2 text-5xl font-semibold  tracking-tighter">
                      $0 
                    </span>
                    <span className="inline-block pb-2 text-2xl ">
                      /Free
                    </span>
                  </div>
                  <span className="block  mb-8">
                    For individuals
                  </span>
                  <div className="p-4 mb-8 border border-teal-800 rounded-xl">
                    <div className="mb-4">
                      <span className="font-medium ">
                        ➕ Multiple Accounts
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className=" font-medium">
                        ➕ Unlimited records&nbsp;
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className=" font-medium">
                        ➕ Forex/ crypto&nbsp;
                      </span>
                    </div>

                      {/* <span className=" font-medium">No-risk&nbsp;</span> */}
                  </div>
                  <a
                    className="group flex justify-center w-full h-12 p-1 text-center text-base  font-semibold rounded-lg"
                    href="https://app.Tokyo.com"
                  >
                    <div className="inline-flex items-stretch w-full h-12 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                      <div className="flex w-full items-center justify-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <div className="flex mb-10 items-start">
                    <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-gray-800 rounded-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="ml-4">
                      <p className="text-sm">
                        <span className="font-semibold ">
                          Free for beta users
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
