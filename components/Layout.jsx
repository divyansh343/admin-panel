import { useState, useEffect } from "react"
import localFont from 'next/font/local'
import Navbar from "./Navbar"
import Footer from "./Footer"

const myFont = localFont({ src: '../assets/fonts/Graphik-Font-Family/GraphikRegular.otf' })
// const myFont = localFont({ src: '../assets/fonts/gelion/Gelion Regular.ttf' })
// const myFont = localFont({ src: '../assets/fonts/Inter/Inter-Regular.ttf' })
import { Roboto_Serif } from 'next/font/google'

const openSans = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }) => {
  const [theme, settheme] = useState("lofi")
  return (
    <div data-theme={theme} lang="en"
      className={` bg-base-100  ${myFont.className}`}>
      {/* className={` bg-base-100  ${openSans.className}`}> */}
      <Navbar theme={theme} settheme={settheme} />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout