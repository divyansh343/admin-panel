import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { isAuth, setCookie, toastify } from '../../utils/handleCookies'
import { useRouter } from 'next/router'
import ReactLoading from "react-loading";

const RegisterContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [loading, setloading] = useState(false)
  let router = useRouter()

  const handleRegister = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/register`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    setloading(true)
    axios(config)
      .then(function (response) {
        setCookie(response.data.token)
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
          <div x-show="isLoginPage" class="space-y-4">
            <header class="mb-3 text-2xl font-bold">Create your profile</header>
            {/* <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Age" class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div> */}
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} class="my-3 w-full border-none bg-transparent  text-gray-700  outline-none focus:outline-none" />
            </div>
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" class="my-3 w-full border-none bg-transparent  text-gray-700  outline-none focus:outline-none" />
            </div>
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="text" value={password} onChange={e => setPass(e.target.value)} placeholder="Password" class="my-3 w-full border-none bg-transparent outline-none  text-gray-700 focus:outline-none" />
            </div>
            <button onClick={handleRegister} class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">CREATE ACCOUNT</button>
          </div>
        </div>
      </>
    )
  } else {
    router.push('/user')
  }
}

export default RegisterContainer