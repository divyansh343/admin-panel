import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { IoCopy } from "react-icons/io5";

const Record = () => {
  const router = useRouter();

  const [tradingPair, setTradingPair] = useState("");
  const [positionType, setPositionType] = useState("long");
  const [positionSize, setPositionSize] = useState("");
  const [statusid, setStatus] = useState("running");
  const [leverage, setLeverage] = useState("");
  const [pnl, setPnl] = useState("");
  const [roi, setroi] = useState("");
  const [profitable, setProfitable] = useState("profit");
  const [chartUrl, setChartUrl] = useState("");
  const [description, setDescription] = useState("");

  const emptyField = () => {
    setTradingPair("");
    setPositionType("long");
    setPositionSize("");
    setLeverage("");
    setPnl("");
    setProfitable("profit");
    setChartUrl("");
    setDescription("");
  }
  const handleTrade = () => {

    if (
      !tradingPair ||
      !positionType ||
      !positionSize ||
      !statusid ||
      !leverage ||
      !pnl ||
      !roi ||
      !chartUrl ||
      !description
    ) {
      // Display an error message or handle the validation as per your requirements
      toast.error('Some field are blank');
      return;
    }

    let token = localStorage.getItem('token')

    // Prepare the data for the API request
    const data = {
      accid: router.query.accid,
      symbol: tradingPair,
      position_type: positionType,
      status: statusid,
      margin: positionSize,
      leverage: leverage,
      pnl: pnl,
      roi: roi,
      profitable: profitable,
      loss: 0,
      image: chartUrl,
      description: description,
    };
    // console.log(data)
    // Make the API request
    axios.post(`${process.env.NEXT_PUBLIC_HOST}api/trades/create`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        // console.log('Trade recorded successfully:', response.data);
        toast.success("trade recorded")
        emptyField()
        router.back()
        // Handle any other logic or state updates you need
      })
      .catch((error) => {
        console.error('Error recording trade:', error);
        // Handle error or show a message to the user
      });
  };


  return (
    <Wrapper>
      <div className="flex justify-start mb-8">

        <button onClick={() => router.back()} className=" mt-1">
          <IoIosArrowBack className="inline-block ml-2" /> Back
        </button>
      </div>
      <div className="lg:w-2/3 text-center mx-auto">
        <div className="flex justify-center mb-8">
        <h1 className=" font-bold text-5xl md:text-4xl xl:text-4xl">
          Record your trade<br />
        </h1>
        </div>
        <div className="my-8">
          <div className="p-4 w-5/5 md:w-4/5 mx-auto text-left border border-gray-400 rounded-2xl">

            <div className="mb-4 flex flex-col">
              <label htmlFor="account" className="font-bold mb-1 text-sm">
                Trading Pair
              </label>
              <input
                type="text"
                id="account"
                className="w-full p-2 uppercase font-bold border rounded-md text-sm text-primary"
                placeholder="E.g. BTCUSDT.P, EURUSD"
                value={tradingPair}
                onChange={(e) => setTradingPair(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row space-x-1">
                {/* ... (existing JSX) */}
                <div className="w-full mb-4">
                  <label htmlFor="type" className="block font-bold mb-1 text-sm">
                    Status
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border rounded-md text-sm text-primary"
                    value={statusid}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="running">Running</option>
                    <option value="tp">TP</option>
                    <option value="sl">SL</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

              </div>
            <div className="grid lg:grid-cols-2 gap-2">
              <div className="flex flex-col sm:flex-row space-x-1">
                {/* ... (existing JSX) */}
                <div className="w-full  mb-4">
                  <label htmlFor="type" className="block font-bold mb-1 text-sm">
                    Position Type
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border rounded-md text-sm text-primary"
                    value={positionType}
                    onChange={(e) => setPositionType(e.target.value)}
                  >
                    <option value="long">LONG</option>
                    <option value="short">SHORT</option>
                  </select>
                </div>

              </div>
              
          
              <div className="mb-4">
                <label
                  htmlFor="numArticles"
                  className="block font-bold mb-1 text-sm"
                >
                  Position Size
                </label>
                <input
                  type="number"
                  id="numArticles"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={positionSize}
                  onChange={(e) => setPositionSize(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numArticles"
                  className="block font-bold mb-1 text-sm"
                >
                  Return On Investment - ROI %
                </label>
                <input
                  type="number"
                  id="numArticles"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={roi}
                  onChange={(e) => setroi(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numArticles"
                  className="block font-bold mb-1 text-sm"
                >
                  Leverage
                </label>
                <input
                  type="number"
                  id="numArticles"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numArticles"
                  className="block font-bold mb-1 text-sm"
                >
                  PnL
                </label>
                <input
                  type="number"
                  id="numArticles"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={pnl}
                  onChange={(e) => setPnl(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label htmlFor="type" className="block font-bold mb-1 text-sm">
                  Profitable
                </label>
                <select
                  id="type"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={profitable}
                  onChange={(e) => setProfitable(e.target.value)}
                >
                  <option value="profit">Profit</option>
                  <option value="loss">Loss</option>
                </select>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="account" className="font-bold mb-1 text-sm">
                Chart URL
              </label>
              <input
                type="text"
                id="account"
                className="w-full p-2 border rounded-md text-sm text-primary"
                placeholder="E.g. https://www.tradingview.com/x/fcLZqeGz/"
                value={chartUrl}
                onChange={(e) => setChartUrl(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label for="numArticles" className="block  font-bold mb-1 text-sm">
                Description
              </label>
              <textarea
                className="block py-2 px-4 w-full h-44  text-black  border border-gray-700 focus:border-primary rounded-lg outline-none ring ring-transparent focus:ring-primary resize-none"
                placeholder="I got Long on double bottom, at important support, turns out profitable hit TP."
                spellcheck="false" value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              className="bg-white text-black border border-gray-600 font-bold py-2 px-4 rounded-lg text-sm ml-2"
              onClick={handleTrade}
            >
              Record Your Trade
              <IoCopy className="inline-block ml-2 text-[#00386e] " />
            </button>
            <p className="text-sm"></p>

            <div className="border-t border-gray-300 mt-2">
              <p className="text-sm text-gray-500 mt-4">
                Output will come in markdown file format.
                <br />
                You can import these files direcly to Notion or your blog
                websites.
                <br />
                Or use Blog boilerplate code from
                <span className="underline"></span>
                to host your blog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Record;
