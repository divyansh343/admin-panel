import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
  const [navON, setNav] = useState(false)
  const PhoneNav = () => {
    return (
      <>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 w-full sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-base-100 opacity-80">
          </div><nav className="relative z-10 px-8 pt-8 -mt-0.5 bg-base-100 h-full overflow-y-auto ">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2"><a className="flex space-x-4 items-center" href="#">
                    {/* <img src="/1secondcopy_icon.png" alt="" class="w-9 ring-2 ring-white rounded-lg  "> */}
                    <span className="text-white font-bold text-xl">1SecondCopy</span>
                  </a>
                  </div>
                  <div className="w-auto p-2">
                    <button onClick={() => setNav(false)} className="inline-block navbar-burger"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full"><ul className="flex flex-col space-y-8"><li className="mr-9"><a className="inline-block text-sm font-medium text-gray-100 text-opacity-80 hover:text-gray-200" href="#how-it-works">How it works</a></li><li className="mr-9"><a className="inline-block text-sm font-medium text-gray-100 text-opacity-80 hover:text-gray-200" href="#pricing">Pricing</a></li><li className="mr-9"><a className="inline-block text-sm font-medium text-gray-100 text-opacity-80 hover:text-gray-200" href="/blog">Blog</a></li><li className="mr-9"><a className="inline-block text-sm font-medium text-gray-100 text-opacity-80 hover:text-gray-200" href="/contact">Contact Sales</a></li><li><a className="inline-block text-sm font-medium text-gray-100 text-opacity-80 hover:text-gray-200" href="https://app.1secondcopy.com/login">Login</a></li></ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap -m-2"><a href="https://app.1secondcopy.com/" className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-900 bg-primary rounded-lg transition-all duration-300 focus:outline-none">
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300">
                  </div><span>Get Started</span></a>
                </div>
              </div>
            </div>
          </nav>
        </div></>
    )
  }

  return (
    <>
      <div>
        <nav className="relative">
          <div className="container mx-auto px-4 font-display">
            <div className="relative flex h-24 items-center">
              <Link href="/">
                <div className="flex space-x-2 items-center text-xl font-bold md:text-2xl" href="#">
                  {/* <img class="h-9 rounded-lg ring-2 ring-white mr-2" src="/1secondcopy_icon.png" alt=""> */}
                  <p><span className="normal-case">Frontend</span> <span className="normal-case text-primary -ml-1">Jobs.</span></p>
                </div>
              </Link>

              <button onClick={() => setNav(true)} className="lg:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 19H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>

              <div className="hidden lg:flex ml-auto items-center">

                <a className="inline-block  hover:text-primary mr-10" href="#how-it-works">How it works</a><a className="inline-block  hover:text-primary mr-10" href="#pricing">Pricing</a><a className="inline-block  hover:text-primary mr-10" href="/blog">Blog</a><a className="inline-block  hover:text-primary" href="/contact">Contact Sales</a>

              </div>

              <div className="hidden lg:block ml-12"><a className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm  font-text-primary-gray-800 hover:bg-gray-900 rounded-lg" href="https://app.1secondcopy.com/login/">Login</a><a className="group inline-block justify-center p-1 text-center text-sm  font-text-primary" href="https://app.1secondcopy.com/">

                <div className="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-primary">

                  <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300"><span>Get Started</span>

                  </div>
                </div></a>
              </div>
            </div>
          </div>
        </nav>
        {/* Phone Nav */}
        {
          navON ? <PhoneNav />
            : null
        }
        {/* Phone Nav */}

      </div>
    </>
  )
}

export default Navbar
