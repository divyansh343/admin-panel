import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiLoveHowl } from 'react-icons/gi'
import nomad from "../../assets/images/nomad.png"

const Cta = () => {
  return (

    <footer class="bg-blue-50 border-t border-base-content/10">
      <div class="max-w-7xl mx-auto px-8 py-24">
        <div class=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">

              <div className="flex space-x-2 items-center text-xl font-bold md:text-2xl" >
                <Image height={60} width={60} class="h-12 w-12 rounded-lg  mr-1" src={nomad} alt="" />
                <p><span className="normal-case">Nomad</span> <span className="normal-case text-primary -ml-1">Jobs.</span></p>

              </div>
            </Link><p class="mt-3 text-base text-base-content/80 leading-relaxed">Ship your startup in days, not weeks<br />Copyright © 2024 - All rights reserved</p>



         
            <div class="mt-8 space-y-2 md:hidden"><p class="font-medium text-base">We build together on Discord!</p><button class="btn text-white bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac] btn-sm" title="Join Discord community">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg>Join us</button>
            </div>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <div class="footer-title font-semibold text-base-content tracking-widest text-base md:text-left mb-3">Creative
              </div>
              <div class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base">

                <p class="link link-hover" >Pricing</p><a class="link link-hover" href="/license">Licenses</a><a class="link link-hover" href="/docs">Documentation</a><a href="mailto:marc@shipfa.st" target="_blank" class="link link-hover">Support</a><a class="link link-hover" href="/affiliates">Affiliates — Earn up to $99 per sale</a><button class="hidden md:inline cursor-pointer hover:underline text-[#7289da] hover:text-[#596dac] text-left" title="Go to ShipFast Discord server">Build with us on Discord</button>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <div class="footer-title font-semibold text-base-content tracking-widest text-base md:text-left mb-3">Remote
              </div>
              <div class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"><a class="link link-hover" href="/tos">Terms of services</a><a class="link link-hover" href="/privacy-policy">Privacy policy</a>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <div class="footer-title font-semibold text-base-content tracking-widest text-base md:text-left mb-3">Marketing
              </div>
              <div class="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base"><a href="https://marclou.beehiiv.com/" target="_blank" class="link link-hover">Newsletter for makers</a><a href="https://byedispute.com/" target="_blank" class="link link-hover">ByeDispute</a><a href="https://indiepa.ge/" target="_blank" class="link link-hover">IndiePage</a><a class="link link-hover" href="/tools/fake-it-till-you-make-it">Fake It Till You Make It</a><a class="link link-hover" href="/tools/logo-fast">LogoFast</a>
              </div>
            </div>
          </div>
        </div>
      </div></footer>

  )
}

export default Cta