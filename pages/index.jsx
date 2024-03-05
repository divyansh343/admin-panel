import Wrapper from "@/components/Wrapper";
import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Points from "@/components/home/Points";
import Pricing from "@/components/home/Pricing";
import Skin from "@/components/home/Skin";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Skin/>
      <Points />
      <Pricing />
      <Faq />
      {/* <Cta /> */}
    </div>
  )
}
