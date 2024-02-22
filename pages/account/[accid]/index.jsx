import Wrapper from '@/components/Wrapper'
import TradeCard from '@/components/trades/TradeCard'
import TradeTable from '@/components/trades/TradeTable'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Index = () => {
  const [trades, setTrades] = useState([])
  const router = useRouter()
  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)
    let data = {
      accid: router.query.accid
    }

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/trades/gettrades`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        setTrades(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [router])

  return (
    <div>
      <Link href="/user" className='mx-4 mt-4'>
        <IoIosArrowBack className='inline-block ml-2' /> Back
      </Link>
      <div className='hidden md:block'>
        <TradeTable trades={trades} />
      </div>
      <TradeCard trades={trades} />
      <div className='block md:hidden'>
      </div>
    </div>
  )
}

export default Index