import Wrapper from '@/components/Wrapper'
import LoginContainer from '@/components/auth/LoginContainer'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <Wrapper>
      <div class="p-6" x-data="app">


        <div class=" mx-auto my-20 max-w-sm transform space-y-4 text-center">
          <LoginContainer />


          <div class="flex items-center space-x-4">
            <hr class="w-full border border-gray-300" />
            <div class="font-semibold text-gray-400">OR</div>
            <hr class="w-full border border-gray-300" />
          </div>
          <Link href="/auth/register">
            <button class="w-full rounded-2xl mt-2 border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">CREATE ACCOUNT</button>
          </Link>
        </div>
      </div>
    </Wrapper>

  )
}

export default login