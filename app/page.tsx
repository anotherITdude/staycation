import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import Staycation from "@/components/Staycation";
import Terms from "@/components/Terms";
 
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Staycation En" />
      <Hero title="Section 2" />
      <Staycation/>
      <HowToEnter />
      <RegisterSection />
      <Terms />
    </Container>
  );
}
