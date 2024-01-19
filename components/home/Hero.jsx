import Link from "next/link"

const Hero = () => {
  return (
    <div>
      <div className="relative max-w-lg pt-40 md:max-w-3xl mx-auto text-center">
        <h1 className="tracking-tight text-xl xs:text-5xl md:text-5xl lg:text-5xl font-bold mb-6">
          <span className="leading-none">Join Now</span>
          <span className="text-primary mt-2  text-4xl xs:text-5xl md:text-5xl lg:text-6xl"><br />Admin <span className="">Mangement Panel</span></span></h1>
         
          <p className="md:max-w-md lg:max-w-lg mx-auto text-lg  mb-10">  We hand pick every features so you don&apos;t have to.</p>
          <div className="grid grid-flow-col gap-4 px-4">
                  <Link
                    href="/auth/login"
                    className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold  bg-primary rounded-lg transition-all duration-300 focus:outline-none"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                    <span className="text-white">User Login</span>
                  </Link>
                  <Link
                    href="/admin/login"
                    className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center  justify-center px-5 h-12 font-bold  bg-primary rounded-lg transition-all duration-300 focus:outline-none"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                    <span className="text-white">Admin Login</span>
                  </Link>
                </div>
      </div>
    </div>
  )
}

export default Hero