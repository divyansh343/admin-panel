import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nomad from "../assets/images/nomad.png"

const Footer = () => {
  return (

    <footer class="bg-blue-50 border-t border-base-content/10">
      <div class="max-w-7xl mx-auto px-8 py-24">
        <div class=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">

              <div className="flex space-x-2 items-center text-xl font-bold md:text-2xl" >
                <Image height={60} width={60} class="h-12 w-12 rounded-lg  mr-1" src={nomad} alt="" />
                <p><span className="normal-case">Admin</span> <span className="normal-case text-primary -ml-1">Panel.</span></p>

              </div>
            </Link><p class="mt-3 text-base text-base-content/80 leading-relaxed">Record your data in seconds, not weeks<br />Copyright © 2024 - All rights reserved</p>



    
          </div>
        
        </div>
      </div></footer>

  )
}

export default Footer