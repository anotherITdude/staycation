import Container from "@/components/Container";
import FormSection from "@/components/FormSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Terms from "@/components/Terms";
import Image from "@/node_modules/next/image";
import Logo from '../public/logo.svg'
export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero title="AAF Staycation AR" />
      <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" />
      <FormSection title="Form" />
      <Terms />
    </Container>
  );
}
