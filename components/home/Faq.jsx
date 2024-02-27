import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="relative pt-12 mb-12 lg:pb-0 md:py-24 ">
        <div className="max-w-sm md:max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full mb-20 lg:mb-0 lg:pb-64">
              <div className="">
                <span className="inline-flex items-center h-6 mb-6 px-2 text-sm font-medium text-primary bg-base-200 rounded-full">
                  FAQ
                </span>
                <h1 className=" tracking-tight text-4xl sm:text-5xl font-semibold text-primary mb-10">
                  Frequently asked questions
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-base-200 rounded-xl border border-transparent hover:border-yellowGreen-800 ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-primary">
                      What is Landing Pages?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-base-content">
                      Were a network of handpicked, high-quality writers and
                      editors that work on-demand for your convenience.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-base-200 rounded-xl border border-transparent hover:border-yellowGreen-800 ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-primary">How does it work?</h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-base-content">
                      Its easy - just enter a few details about your business,
                      add a title &amp; a couple of keywords, and our
                      world-class writers will whip up a high quality piece in
                      under three business days.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-base-200 rounded-xl border border-transparent hover:border-yellowGreen-800 ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-primary">
                      How much does it cost?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-base-content">
                      We charge a simple, flat fee: $0.09/word. You can buy
                      additional words in the app as needed.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-base-200 rounded-xl border border-transparent hover:border-yellowGreen-800 ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-primary">Is there any risk?</h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-base-content">
                      Not at all! If youre not in love with your content in the
                      first week, let us know and well give you a 100% refund.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button className="group flex items-center justify-between text-left w-full px-6 py-5 bg-base-200 rounded-xl border border-transparent hover:border-yellowGreen-800 ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-primary">
                      How is the content delivered?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-base-content">
                      Orders are delivered via Google Doc link with global
                      sharing access.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
