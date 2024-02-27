import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nomad from "../assets/images/nomad.png"
import Wrapper from './Wrapper'

const Footer = () => {
  return (

    <Wrapper className="bg-base-100 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">

              <div className="flex space-x-2 items-center text-xl font-bold md:text-2xl" >
                <Image height={60} width={60} className="h-12 w-12 rounded-lg  mr-1" src={nomad} alt="" />
                <p className='text-secondary'><span className="normal-case">Trade</span> <span className="normal-case -ml-1">OS</span></p>

              </div>
            </Link><p className="mt-3 text-base text-base-content/80 leading-relaxed">Your Free Companion for Smarter Trading<br />Copyright © 2024 - All rights reserved</p>



    
          </div>
        
        </div>
      </div></Wrapper>

  )
}

export default Footer