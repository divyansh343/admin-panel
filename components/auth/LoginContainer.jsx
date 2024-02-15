import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { isAuth, setCookie, toastify } from '../../utils/handleCookies'
import { useRouter } from 'next/router'
import ReactLoading from "react-loading";
import { useTradeStore } from '@/utils/appstore'

const LoginContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [email, setEmail] = useState("ravish402@gmail.com")
  const [password, setPass] = useState("passworse")
  const [loading, setloading] = useState(false)
  let router = useRouter()



  const handleLogin = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    setloading(true)
    axios(config)
      .then(function (response) {
        setCookie(response.data.token)
        console.log(response.data.token)
        toastify("user logged in")
        router.push('/user')
        setloading(false)
      })
      .catch(function (error) {
        console.log("invalid details");
        console.log(error);

        setloading(false)
      });
  }

  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
  }, [])

  if (!isAuthenticated) {
    return (
      <>
        <div>

          <div class="space-y-4">
            <header class="mb-3 text-2xl font-bold">Log in</header>
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" class="my-3 w-full border-none bg-transparent outline-none text-primary focus:outline-none" />
            </div>
            <div class="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input value={password} onChange={e => setPass(e.target.value)} type="text" placeholder="Password" class="my-3 w-full border-none bg-transparent text-primary outline-none" />
              <a href="#" class="font-medium  hover:text-gray-500">FORGOT?</a>
            </div>
            <button onClick={handleLogin} class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">LOG IN</button>
          </div>
        </div>
      </>
    )
  } else {
    router.push('/user')
  }
}

export default LoginContainer