import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import Staycation from "@/components/Staycation";
import Terms from "@/components/Terms";
import Image from "@/node_modules/next/image";
import Logo from '../public/logo.svg'
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Staycation AR" />
      <Hero title="Section 2" />
      <Staycation />
      <HowToEnter />
      <RegisterSection />
      <Terms />
    </Container>
  );
}
