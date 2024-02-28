import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import nomad from "../assets/images/nomad.png"
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
const Navbar = ({ theme, settheme }) => {
  const [navON, setNav] = useState(false)
  const PhoneNav = () => {
    return (
      <>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 w-full sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-base-100"></div>
          <nav className="relative z-10 px-8 pt-8 -mt-0.5  h-full overflow-y-auto ">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <Link href="/">
                    <div
                      className="flex space-x-2 items-center text-xl font-bold md:text-2xl"
                      href="#"
                    >
                      <Image
                        height={60}
                        width={60}
                        className="h-12 w-12 rounded-lg mr-1"
                        src={nomad}
                        alt=""
                      />
                      <p className='text-accent'>
                        <span className="normal-case">Trade</span>
                        <span className="normal-case  -ml-1">
                          OS
                        </span>
                      </p>
                    </div>
                  </Link>
                  <div className="w-auto p-2 bg-accent">

                    <button
                      onClick={() => setNav(false)}
                      className="inline-block navbar-burger"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">

              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap -m-2 text-base-100">
                  <Link
                    href="/auth/login"
                    className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold  bg-secondary rounded-lg transition-all duration-300 focus:outline-none"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                    <span>User Login</span>
                  </Link>
                  <Link
                    href="/admin/login"
                    className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center mt-2 justify-center px-5 h-12 font-bold  bg-secondary rounded-lg transition-all duration-300 focus:outline-none"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                    <span>Admin Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  };


  return (
    <>
      <div>
        <nav className="relative">
          <div className="container mx-auto px-4 font-display">
            <div className="relative flex h-24 items-center">
              <Link href="/">
                <div className="flex space-x-2 items-center text-xl font-bold md:text-2xl" href="#">
                  <Image height={60} width={60} className="h-12 w-12 rounded-lg  mr-1" src={nomad} alt="" />
                  <p className=''><span className="normal-case">Trade </span> <span className="normal-case -ml-1">OS</span></p>
                </div>
              </Link>
              {/* phone change */}
              {/* <div className="block md:hidden ml-auto items-end">
                <div className="inline-block   hover:text-sebg-secondary mr-10" >
                  <label className="swap swap-rotate ">

                    <input onChange={theme === "lofi" ? () => settheme("dim") : () => settheme("lofi")} type="checkbox" />
                    <span className='swap-on text-xl text-primary'>
                      <BsFillSunFill />
                    </span>

                    <span className='swap-off text-lg text-primary'>
                      <BsMoonFill />
                    </span>
                  </label>
                </div>
              </div> */}
              {/* phone change */}
              <button onClick={() => setNav(true)} className="flex md:hidden navbar-burger  items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-accent bg-opacity-80 hover:bg-teal-700 rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 19H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>

              <div className="hidden md:block ml-auto items-end">
                {/* <a className="inline-block  hover:text-sebg-secondary mr-10" href="#how-it-works">How it works</a><a className="inline-block  hover:text-sebg-secondary mr-10" href="#pricing">Pricing</a><a className="inline-block  hover:text-sebg-secondary mr-10" href="/blog">Blog</a> */}

              </div>

              <div className="hidden md:block ml-auto items-end">
                {/* <div className="inline-block   hover:text-sebg-secondary mr-10" >
                  <label className="swap swap-rotate ">

                    <input className='pt-1' onChange={theme === "lofi" ? () => settheme("dim") : () => settheme("lofi")} type="checkbox" />
                    <span className='swap-on text-xl text-primary'>
                      <BsFillSunFill />
                    </span>

                    <span className='swap-off text-lg text-primary'>
                      <BsMoonFill />
                    </span>
                  </label>
                </div> */}
                {/* <a className="inline-block  hover:text-sebg-secondary mr-10" href="#pricing">Pricing</a><a className="inline-block  hover:text-sebg-secondary mr-10" href="/blog">Blog</a> */}
                {/* <Link className="inline-block  hover:text-primary" href="/auth/login">Login User</Link> */}
              </div>

              {/* <div className="hidden md:block ml-auto items-end">
                
                <Link className="inline-block  hover:text-primary" href="/charts">Charts</Link>
              </div> */}

              <div className="hidden md:flex ml-24 md:ml-12">
                <Link className="group inline-block justify-center ml-4 md:ml-0 p-1 text-center text-sm  font-text-primary" href="/auth/login">
                  <div className="inline-flex items-stretch h-10 p-0.5 text-primary-content rounded-lg bg-primary">
                    <div className="flex items-center px-4  group-hover:bg-opacity-40 rounded-md "><span> Login user</span>
                    </div>
                  </div>
                </Link>
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
