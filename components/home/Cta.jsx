import React from 'react'
import { GiLoveHowl } from 'react-icons/gi'

const Cta = () => {
  return (

    <div>
      <div className="container mx-auto">
        <div className="bg-[#F2F2F8] rounded-[20px] p-[30px] md:p-[80px] lg:p-[100px]">
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="600" data-aos-once="true" className="aos-init aos-animate">
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">Solutions</h3>
              <ul className="list-none space-y-[12px]">
                <li>
                  <a className="hover:text-[#EF4335]" href="/services/service-details/">Google Ads</a>
                  </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/services/service-details/">Social Media Ads</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/services/service-details/">Amazon Shopping</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/services/service-details/">Email Marketing</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/services/service-details/">Microsoft Ads</a>
                </li></ul>
            </div>
            <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="600" data-aos-once="true" className="aos-init aos-animate">
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">Resources</h3>
              <ul className="list-none space-y-[12px]">
                <li>
                  <a className="hover:text-[#EF4335]" href="/blog/">Our Blog</a>
                  </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/success-stories/">Success Stories</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="#">Customers Review</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/contact-us/">Contact Us</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/about-us/">About Us</a>
                </li></ul>
            </div>
            <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="600" data-aos-once="true" className="aos-init aos-animate">
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">Opportunities</h3>
              <ul className="list-none space-y-[12px]">
                <li>
                  <a className="hover:text-[#EF4335]" href="/careers/">Careers</a>
                  </li>
              <li>
                <a className="hover:text-[#EF4335]" href="#">Partnerships</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="#">Awards</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/contact-us/">Get A Proposal</a>
                </li>
              <li>
                <a className="hover:text-[#EF4335]" href="/contact-us/">Free Audit</a>
                </li></ul>
            </div>
            <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="600" data-aos-once="true" className="aos-init aos-animate">
              <h3 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">Signup Newsletter</h3>
              <form className="mb-[20px]">
                <input type="email" placeholder="Email Address" className="block w-full px-[30px] py-[15px] bg-white border-0 rounded-[50px] placeholder-[#4C4C4C]   focus:outline-none  " />
                  
                  <button type="submit" className="bg-primary text-white text-[14px] font-medium block w-full uppercase rounded-full py-[15px] px-[15px] mt-[15px] transition duration-500 ease-in-out hover:bg-[#EF4335]">Signup Now <svg className="inline-block relative -top-[2px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                </button>
                </form>

              <ul className="list-none space-x-[5px] md:space-x-[9px]"><li className="inline-block"><a href="https://www.facebook.com/" target="_blank" className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"><i className="bx bxl-facebook"></i></a>
              </li><li className="inline-block"><a href="https://www.linkedin.com/" target="_blank" className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"><i className="bx bxl-linkedin"></i></a>
              </li><li className="inline-block"><a href="https://www.twitter.com/" target="_blank" className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"><i className="bx bxl-twitter"></i></a>
              </li><li className="inline-block"><a href="https://www.instagram.com/" target="_blank" className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"><i className="bx bxl-instagram"></i></a>
              </li><li className="inline-block"><a href="https://www.youtube.com/" target="_blank" className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"><i className="bx bxl-youtube"></i></a>
              </li></ul>
            </div>
          </div>
        </div>
        <div className="py-[30px]">
          <div className="grid items-center gap-[15px] md:gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center md:text-left"><p className=" ml-5 mb-10 md:mb-0">Made with love <GiLoveHowl className="inline-block text-xl text-red-500" /> © 2023 Nomad Jobs. All rights reserved.</p>
            </div>
            <div className="text-center mr-2 md:text-end">
              <ul><li className="inline-block mr-[30px] last:mr-[0px] relative before:content-[''] before:absolute before:right-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden"><a className="text-black hover:text-[#EF4335]" href="/privacy-policy/">Privacy &amp; Policy</a>
              </li><li className="inline-block mr-[30px] last:mr-[0px] relative before:content-[''] before:absolute before:right-[-15px] before:bg-[#000] before:h-[15px] before:w-[1px] before:top-[6px] before:hidden lg:before:block last-of-type:before:hidden"><a className="text-black hover:text-[#EF4335]" href="/terms-conditions/">Terms &amp; Conditions</a>
              </li></ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cta