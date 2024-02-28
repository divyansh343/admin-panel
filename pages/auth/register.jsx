import Wrapper from '@/components/Wrapper'
import RegisterContainer from '@/components/auth/RegisterContainer'
import Link from 'next/link'
import React from 'react'

const register = () => {
  return (
    <Wrapper>
      <div className="p-6" x-data="app">


        <div className=" my-20 mx-auto max-w-sm transform space-y-4 text-center">
          <RegisterContainer />

          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>
          <Link href="/auth/login">
            <p className="w-full rounded-2xl border-b-4 mt-2 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">Log In</p>
          </Link>

        </div>
      </div>
    </Wrapper>
  )
}

export default register