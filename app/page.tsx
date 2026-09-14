import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Hub } from "@/components/sections/Hub";
import { Products } from "@/components/sections/Products";
import { CustomTechnology } from "@/components/sections/CustomTechnology";
import { HowAxonThinks } from "@/components/sections/HowAxonThinks";
import { IntelligenceLayer } from "@/components/sections/IntelligenceLayer";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Future } from "@/components/sections/Future";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Hub />
        <Products />
        <CustomTechnology />
        <HowAxonThinks />
        <IntelligenceLayer />
        <TrustedBy />
        <CaseStudies />
        <Future />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
