import { useState, useEffect } from "react"
import localFont from 'next/font/local'
import Navbar from "./Navbar"
import Footer from "./Footer"

const myFont = localFont({ src: '../assets/fonts/gelion/Gelion Regular.ttf' })
import { Nunito_Sans } from 'next/font/google'

const openSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }) => {
  const [theme, settheme] = useState("light")
  return (
    <div data-theme="coda" lang="en"
      className={` bg-base-100  ${openSans.className}`}>
      <Navbar />
      <div className="">
        {children}
      </div>
      {/* <Footer /> */}
      {/* <Cta /> */}
    </div>
  )
}

export default Layout