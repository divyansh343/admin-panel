import Wrapper from '@/components/Wrapper';
import TradeCard from '@/components/trades/TradeCard';
import TradeTable from '@/components/trades/TradeTable';
import { toastify } from '@/utils/handleCookies';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';

const Index = () => {
  const [trades, setTrades] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to "/" if no token is present
      router.push('/');
      toast.error("You're not authorized. Please log in.");
      return;
    }

    const data = {
      accid: router.query.accid,
    };

    const config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/trades/gettrades`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setTrades(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router]);

  return (
    <div>
      <Link href="/user" className="mx-4 mt-4">
        <IoIosArrowBack className="inline-block ml-2" /> Back
      </Link>
      
      <TradeTable trades={trades} />
      {/* <div class="col-span-12 grid grid-cols-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-5 sm:py-6">
        <div class="col-span-12 sm:col-span-6 lg:col-span-4">
          <div class="px-4 text-white sm:px-5">
            <div class="-mt-1 flex items-center space-x-2">
              <h2 class="text-base font-medium tracking-wide">Balance</h2>
              <div class="inline-flex">
                <button x-ref="popperRef" class="btn size-8 rounded-full p-0 hover:bg-white/20 focus:bg-white/20 active:bg-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </button>

         
              </div>
            </div>

            <div class="mt-3">
              <p class="text-2xl font-semibold">$6,556.55</p>
              <p class="text-xs">+ 3.5%</p>
            </div>

            <div class="mt-4 flex space-x-7">
              <div>
                <p class="text-indigo-100">Income</p>
                <div class="mt-1 flex items-center space-x-2">
                  <div class="flex size-7 items-center justify-center rounded-full bg-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                    </svg>
                  </div>
                  <p class="text-base font-medium">$2,225.22</p>
                </div>
              </div>
              <div>
                <p class="text-indigo-100">Expense</p>
                <div class="mt-1 flex items-center space-x-2">
                  <div class="flex size-7 items-center justify-center rounded-full bg-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path>
                    </svg>
                  </div>
                  <p class="text-base font-medium">$225.22</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 mt-5 sm:col-span-6 sm:mt-0 lg:col-span-8">
        
        </div>
      </div> */}
    </div>
  );
};

export default Index;
