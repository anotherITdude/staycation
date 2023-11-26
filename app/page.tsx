import Container from "@/components/Container";
import FormSection from "@/components/FormSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
 
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Staycation En" />
      <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" />
      <FormSection title="Form" />
      <Hero title="Section 5" />
    </Container>
  );
}
