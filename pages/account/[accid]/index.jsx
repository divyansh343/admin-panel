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
        // console.log(error);
      });
  }, [router]);

  const delTrade = () => {
    let token = localStorage.getItem("token");
    // console.log(token);
    let data = {
      accid: router.query.accid,
    };
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/acc/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        toastify("Account deleted")
        router.push("/user")
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  return (
    <Wrapper>
      <Link href="/user" className="mx-4 py-10">
        <IoIosArrowBack className="inline-block ml-2" /> Back
      </Link>

      <TradeTable trades={trades} />

      <button onClick={delTrade} className="btn mt-5 h-10  rounded-lg bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 ">
        Delete Account
      </button>
    </Wrapper>
  );
};

export default Index;
