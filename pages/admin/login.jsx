import LoginContainer from '@/components/auth/LoginContainer'
import Link from 'next/link'
import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

const login = () => {
  return (
    <div>
      <div className="lg:h-screen md:flex ">
        <div className="relative bg-blue-300 overflow-hidden md:flex w-1/2 bg-accent-focus i justify-around items-center hidden">
          <div>
            <h1 className="font-bold text-4xl ">Admin Login</h1>
            <Link href='/'>
              <button type="submit" className="block w-28  mt-4 py-2 rounded-2xl font-bold mb-2"> <span className='inline-block'><MdArrowBackIos /></span> Go Back</button>
              </Link>
          </div>

          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2  justify-center py-10 items-center  ">
          <LoginContainer />
        </div>
      </div>
    </div>
  )
}

export default login