import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjetosSection from "@/components/ProjetosSection";
import CurriculoSection from "@/components/CurriculoSection";
import ContatoSection from "@/components/ContatoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjetosSection />
        <CurriculoSection />
        <ContatoSection />
      </main>
    </>
  );
}
