import Card from "@/components/Job/Card";
import JobContainer from "@/components/Job/JobContainer";
import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Feat from "@/components/home/Feat";
import Flex from "@/components/home/Flex";
import Hero from "@/components/home/Hero";
import Mode from "@/components/home/Mode";
import Nomad from "@/components/home/Nomad";
import Test from "@/components/home/Test";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="">
      {/* <Hero /> */}
      <Test />
      <Flex />
      <JobContainer />
      <Feat />
      {/* <Mode /> */}
      <Faq />
      <Nomad />
      {/* <Testimonials /> */}
    </main>
  )
}
