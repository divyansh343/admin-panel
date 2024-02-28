import Wrapper from '@/components/Wrapper'
import LoginContainer from '@/components/auth/LoginContainer'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <Wrapper>
      <div className="p-6" x-data="app">


        <div className=" mx-auto my-20 max-w-sm transform space-y-4 text-center">
          <LoginContainer />


          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>
          <Link href="/auth/register">
            <button className="w-full rounded-2xl mt-2 border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">CREATE ACCOUNT</button>
          </Link>
        </div>
      </div>
    </Wrapper>

  )
}

export default login