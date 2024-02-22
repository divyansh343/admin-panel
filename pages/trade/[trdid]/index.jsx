import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)
    let data = {
      trdid: router.query.trdid
    }

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/trades/onetrade`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data);
        setTrades(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [router])
  return (
    <div>trade Index</div>
  )
}

export default Index