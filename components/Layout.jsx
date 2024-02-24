import { useState, useEffect } from "react"
import localFont from 'next/font/local'
import Navbar from "./Navbar"
import Footer from "./Footer"

const myFont = localFont({ src: '../assets/fonts/Inter/Inter-Regular.ttf' })
import { Nunito_Sans } from 'next/font/google'

const openSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }) => {
  const [theme, settheme] = useState("lofi")
  return (
    <div data-theme={theme} lang="en"
      className={` bg-base-100  ${myFont.className}`}>
      <Navbar theme={theme} settheme={settheme} />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout