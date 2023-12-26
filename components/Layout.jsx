import { useState, useEffect } from "react"
import localFont from 'next/font/local'
import Navbar from "./Navbar"
import Footer from "./Footer"

const myFont = localFont({ src: '../assets/fonts/gelion/Gelion Regular.ttf' })
const Layout = ({ children }) => {
  const [theme, settheme] = useState("oneSecond")

  return (
    <div data-theme="coda" lang="en"
      className={` bg-base-100  ${myFont.className}`}>
      <Navbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout