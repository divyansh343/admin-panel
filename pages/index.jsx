import JobContainer from "@/components/Job/JobContainer";
import Cta from "@/components/home/Cta";
import Flex from "@/components/home/Flex";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Flex />
      <JobContainer />
      <Testimonials />
    </main>
  )
}
