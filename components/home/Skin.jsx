import Link from 'next/link'
import React from 'react'

const Skin = () => {
  return (
    <div>
      <section class="bg-base-100 p-6 py-16 md:py-32"><div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

        <video className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" controls muted loop autoPlay width="500" height="500">
          <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1709611888/demo_-_Made_with_Clipchamp_jdtzay.mp4" type="video/mp4" />
        </video>


        <div class="space-y-6 md:space-y-8 max-w-lg"><h2 class="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight"> Elevate your trading with easy journaling</h2>
        
        <p class="text-base-content-secondary leading-relaxed"> It&apos;s all here, and it&apos;s all free. Trade smarter, trade faster with Trade OS.</p>
        
        <Link class="btn btn-block btn-primary md:btn-wide  font-normal" href="/auth/login">
          Embed Trading view charts</Link>
        
        </div></div></section>
    </div>
  )
}

export default Skin