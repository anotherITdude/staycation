import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import Terms from "@/components/Terms";
 
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Staycation En" />
      <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" />
      <RegisterSection />
      <Terms />
    </Container>
  );
}
