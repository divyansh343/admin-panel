import Link from "next/link"
import { GiLoveHowl } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <section className="py-12 md:pt-24 bg-[#f9fafb]">
        <div className="mb-12 pb-24 border-b border-gray-800">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16">
                <div>
                  <Link href="/">
                    <div className="flex space-x-2 items-center text-xl font-bold" href="">
                      {/* <img class="h-9 rounded-lg ring-2 ring-white mr-2" src="/1secondcopy_icon.png" alt=""> */}
                      <p><span className="normal-case">Frontend</span> <span className="normal-case text-primary -ml-1">Jobs.</span></p>
                    </div>
                  </Link>
                  <span className="block text-lg  max-w-xs mt-6">We hired the top 1% of writers so you don&apos;t have to. Get high quality articles &amp; posts in just 3 days.</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 ml-auto px-4">
                <div className="flex flex-wrap -mx-4 -mb-8">
                  <div className="w-1/2 xs:w-1/3 px-4 mb-8"><h5 className="text-xl font-semibold mb-6">Product</h5><ul><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/agencies">Agencies</a></li><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/about#services">Services</a></li><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="#pricing">Pricing</a></li></ul>
                  </div>
                  <div className="w-1/2 xs:w-1/3 px-4 mb-8"><h5 className="text-xl font-semibold mb-6">Company</h5><ul><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/about">About</a></li><li className="mb-6"></li><li className="flex items-center mb-6"><a className="inline-block mr-2 text-lg  hover:text-white" href="/careers"><span>Careers</span></a><span className="inline-flex h-6 px-2 items-center bg-teal-600 rounded-full"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="3" fill="white"></circle></svg><span className="ml-0.5 text-xs text-gray-50">Hiring</span></span></li><li><a className="inline-block text-lg  hover:text-white" href="/contact">Contact Sales</a></li></ul>
                  </div>
                  {/* <div className="w-full xs:w-1/3 px-4 mb-8"><h5 className="text-xl font-semibold mb-6">Resources</h5><ul><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/blog">Blog</a></li><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/contact">Support</a></li><li className="mb-6"><a className="inline-block text-lg  hover:text-white" href="/privacy">Privacy</a></li><li></li></ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="md:flex items-center justify-between"><p className=" mb-10 md:mb-0">Made with love <GiLoveHowl className="inline-block text-xl text-red-500" /> © 2023 frontend jobs. All rights reserved.</p>
            <div className="flex items-center"><a className="inline-flex w-10 h-10 p-2 mr-3 hover:text-teal-500 items-center justify-center bg-secondary rounded-full transition duration-100" href="https://ca.linkedin.com/company/1secondcopy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path></svg></a><a className="inline-flex w-10 h-10 p-2 mr-3 hover:text-teal-500 items-center justify-center bg-secondary rounded-full transition duration-100" href="https://instagram.com/1secondcopy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path></svg></a><a className="inline-flex w-10 h-10 p-2 hover:text-teal-500 items-center justify-center bg-secondary rounded-full transition duration-100" href="https://www.facebook.com/1secondcopy/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"></path></svg></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer