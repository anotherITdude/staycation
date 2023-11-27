import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import NationalDay from "@/components/NationalDay";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import Staycation from "@/components/Staycation";
import Terms from "@/components/Terms";
 
export default function Home() {
  return (
    <Container>
      <Hero />
      <NationalDay />
      <Staycation/>
      <HowToEnter />
      <RegisterSection />
      <Terms />
    </Container>
  );
}
