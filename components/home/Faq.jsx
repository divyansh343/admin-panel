import { useState } from 'react'
import toast from 'react-hot-toast'

const Faq = () => {
  const [email, setemail] = useState("")
  const handleSubmit = ()=> {
    toast.success("You're In, Nomad Jobs")
  }
  return (
    <div>
      <section> <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 lg:py-24 max-w-7xl"> <div class="text-center lg:mx-auto"> <p class="text-4xl font-semibold font-display text-blue-950 lg:text-6xl">
        Embark on a shared <span class="md:block">journey within the jommunity</span> </p> <p class="text-slate-600 text-base mt-4 max-w-2xl lg:mx-auto">
          Enlightr is founded on the belief that the process of learning
          flourishes when individuals come together to collaborate, exchange
          ideas, and support each other.
        </p> </div> <form class="max-w-md mx-auto lg:mx-auto mt-12 just bg-green-50 rounded-3xl lg:rounded-full p-4"> <div class="flex flex-col lg:flex-row gap-2"> <label class="sr-only" htmlFor="email-address">Email address</label>

          <input autocomplete="email" class="block w-full px-4 py-2 h-10 border bg-chalk border-transparent bg-transparent appearance-none text-accent-500 placeholder-green-500 focus:border-slate-300 focus:outline-none rounded-full focus:ring-slate-300 duration-200 sm:text-sm" id="email-address" name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" required="" type="email" />

          <p onClick={handleSubmit} class="items-center inline-flex cursor-pointer w-full focus:outline-disc bg-primary/80 duration-500 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 font-medium lg:w-auto h-10 hover:bg-primary justify-center px-6 py-1 rounded-full text-white text-center text-sm" >Subscribe</p> </div> </form> </div> </section>
    </div>
  )
}

export default Faq