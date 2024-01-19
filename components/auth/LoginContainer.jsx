import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { isAuth, setCookie, toastify } from '../../utils/handleCookies'
import { useRouter } from 'next/router'
import ReactLoading from "react-loading";

const LoginContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [email, setEmail] = useState("akash@gmail.com")
  const [password, setPass] = useState("passwordthy")
  const [loading, setloading] = useState(false)
  let router= useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/admin/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    setloading(true)
    axios(config)
      .then(function (response) {
        setCookie(response.data.token)
        toastify("admin logged in")
        router.push('/admin')
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
          <div className=' mx-[20px] '>
            <form onSubmit={handleLogin}>
  
              <div className='grid place-items-center '>
                <p className='text-[28px] font-semibold tracking-wide'>Admin Login</p>
                {/* <p className='text-[26px] -mt-2'>to get started</p> */}
              </div>
              <div className='grid place-items-center grid-flow-row gap-4 mt-10 '>
                <input type="text"
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <input
                  className="input input-bordered input-primary tracking-wide text-base input-md w-full max-w-xs"
                  value={password}
                  onChange={e => setPass(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
  
              </div>
  
              <div className='mt-4 mx-[18px] grid place-items-center '>
              {
                  loading ?
                    <button type='submit' className={`btn btn-wide btn-primary  tracking-wide btn-md`}>
                      <ReactLoading type='spin' className='-mt-2 p-4' color="#fff" />
                    </button>
                    :
                    <button type='submit' className={`btn btn-wide btn-primary tracking-wide btn-md`}>Sign In
                    </button>
                }
              </div>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    router.push('/admin')
  }
}

export default LoginContainer