import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";

const TradeCard = ({ trades }) => {
  const router = useRouter()

  return (
    <Wrapper>
      <div className="my-8">
        {/* <h3 className="text-base font-medium text-slate-600 dark:text-navy-100">
          Today
        </h3> */}
         <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
                <Link href={`/account/${router.query.accid}/record`}>
                  <div
                    className="bg-white text-black border border-gray-600 font-bold py-2 px-4 rounded-lg text-sm ml-2"

                  >
                    Add New Trade
                    <FiPlus
                      className="inline-block ml-2 text-[#00386e] " />

                  </div>
                </Link>
              
              </div>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {trades.map(item => (<>
            <Link href={`/trade/${item._id}`} className="card border border-dashed bg-clip-border rounded-2xl border-primary justify-between p-4 sm:p-5">
              <div className="flex items-center space-x-4">
                {/* <img className="size-10 shrink-0 rounded-lg object-cover" src="images/others/check-report-sm.jpg" alt="image"> */}
                <div className="grid grid-cols-2">
                  <h3 className="text-base font-bold uppercase text-slate-700 dark:text-navy-100">
                    {item.symbol}
                  </h3>
                  <h3 className="text-base font-bold uppercase text-slate-700 dark:text-navy-100">
                    {item.position_type}
                  </h3>
                  <p className="text-xs invisible">Consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 grid-flow-col">
                <p className="text-xl font-medium text-slate-700 dark:text-navy-100">
                  {item.profitable === "loss" ? <> <span className="text-red-500 font-bold">{item.pnl}


                  </span></> : <> <span className="text-green-500 font-bold">{item.pnl}</span></>
                  }
                </p>
             
                  {item.margin}
                <p className="text-xs+">{item.leverage}X</p>

                <div className="mt-5 flex items-center justify-between space-x-2">
                  <div className="flex -space-x-3">
                    <div className="avatar size-8 hover:z-10">
                      {/* <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/avatar/avatar-3.jpg" alt="avatar"> */}
                    </div>

                    <div className="avatar size-8 hover:z-10">
                      {/* <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/avatar/avatar-4.jpg" alt="avatar"> */}
                      
                    </div>
                    
                  </div>
                  
                  <a  href={item.image} target="_blank" rel="noreffrer" className=" rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  view chart
                  </a>
                  
                </div>
              </div>
            </Link>
          </>))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TradeCard;
