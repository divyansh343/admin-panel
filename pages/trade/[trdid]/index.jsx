import Wrapper from "@/components/Wrapper";
import TradingViewWidget from "@/components/widgets/Ticker";
import { toastify } from "@/utils/handleCookies";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FcCandleSticks } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";

import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import { MdCandlestickChart } from "react-icons/md";

const Index = () => {
  const [trade, settrade] = useState({})
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    // console.log(token);
    let data = {
      trdid: router.query.trdid,
    };

    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/trades/onetrade`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        settrade(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router]);
  // console.log(trade.created_at)
  const givenDate = new Date(trade.created_at);

  const delTrade = () => {
    let token = localStorage.getItem("token");
    // console.log(token);
    let data = {
      tradid: router.query.trdid,
      accid: trade.accid,
      profitable: trade.profitable,
      pnl: trade.pnl
    };
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/trades/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        toastify("trade record deleted")
        // console.log(response)
        router.back()
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  return (
    <Wrapper>
      <button onClick={() => router.back()} className=" mb-5">
        <IoIosArrowBack className="inline-block ml-2" /> Back
      </button>
      <div className="col-span-12 space-y-4 sm:space-y-5 lg:col-span-8 lg:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          <div className="card h-56 bg-gradient-to-r from-blue-500 to-blue-600 px-5 pb-5">
            <div>
              <div className="ax-transparent-gridline mt-5 w-1/2">
                <div>
                  {/* <IoTrendingUpSharp className="text-5xl text-secondary" /> */}
                  {/* <IoTrendingDownSharp className="text-5xl text-secondary" /> */}
                  {/* <div className="badge mt-2 space-x-1 bg-success/10 py-3 px-1.5 ">
                    <span className="text-xl">{trade.roi}%</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div> */}
                </div>
              </div>
              <p className="mt-3 text-2xl font-bold tracking-wide uppercase text-indigo-100">
                {trade.symbol}
              </p>
              <p className="mt-4 font-inter text-2xl font-semibold">
                <span className="text-indigo-100">$</span>
                <span className="text-white">{trade.pnl}</span>

              </p>
              <div className="badge mt-2 uppercase rounded-full bg-black/20 text-indigo-50">
                {trade.position_type}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-indigo-50">
                {trade.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
              {/* <Image width={200} height={50} className="w-24 translate-x-1/4 translate-y-1/4 opacity-50" src={trade.image} alt="image" /> */}

            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            <div className="card justify-center p-4.5">
              <div className="flex items-center justify-between">
                <div>
                  <a href={trade.image} target="_blank" rel="noreffrer" className="text-base link font-semibold text-primary">
                    View Chart <MdCandlestickChart className="inline-block text-xl ml-1" />

                  </a>
                  <p className="text-xs+ line-clamp-1">Trading view chart</p>
                </div>
                <div className="mask is-star flex size-10 shrink-0 items-center justify-center bg-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>

              </div>

            </div>
            <div className="card justify-center p-4.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-primary">
                    {trade.margin}
                  </p>
                  <p className="text-xs+ line-clamp-1">Margin</p>
                </div>
                <div className="mask is-star flex size-10 shrink-0 items-center justify-center bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
              </div>

            </div>
            <div className="card justify-center p-4.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-primary">
                    {trade.leverage}X
                  </p>
                  <p className="text-xs+ line-clamp-1">Leverage</p>
                </div>
                <div className="mask is-star flex size-10 shrink-0 items-center justify-center bg-warning">
                  <svg
                    className="size-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5293 18L20.9999 8.40002"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 13.2L7.23529 18L17.8235 6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>

            </div>

            <div className="card justify-center p-4.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-primary">
                    {new Date(trade.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" })}
                  </p>
                  <p className="text-xs+ line-clamp-1">Time</p>
                </div>

                <div className="mask is-star flex size-10 shrink-0 items-center justify-center bg-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>

            </div>
          </div>
          <button onClick={delTrade} className="btn mt-5 h-10 w-full rounded-lg bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 ">
            Delete Trade
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
