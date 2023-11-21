import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "@/node_modules/next/image";
import Logo from '../public/logo.svg'
export default function Home() {
  return (
    <Container>
      <Hero title="Hero Section" />
      <Hero title="Section 2" />
      <Hero title="Section 3" />
      <Hero title="Section 4" />
      <Hero title="Section 4" />
      <Hero title="Section 4" />
    </Container>
  );
}
