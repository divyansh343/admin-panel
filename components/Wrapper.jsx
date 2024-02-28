import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="relative" id="home">
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
    >
      <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
      <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
    </div>
    <div className="max-w-7xl mx-auto px-5 pb-10 md:px-12 xl:px-6">
      <div className="relative  ml-auto">
      {children}
      </div>
    </div>
  </div>
  )
}

export default Wrapper