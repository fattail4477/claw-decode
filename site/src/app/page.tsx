import Hero from "@/components/Hero";
import PetZoo from "@/components/PetZoo";
import Undercover from "@/components/Undercover";
import Secrets from "@/components/Secrets";
import Compare from "@/components/Compare";
import DreamMode from "@/components/DreamMode";
import MemorySystem from "@/components/MemorySystem";
import Tools from "@/components/Tools";
import Patterns from "@/components/Patterns";
import SystemPrompt from "@/components/SystemPrompt";
import Codenames from "@/components/Codenames";
import CyberRisk from "@/components/CyberRisk";
import FeatureFlags from "@/components/FeatureFlags";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <PetZoo />
      <Undercover />
      <Secrets />
      <Compare />
      <DreamMode />
      <MemorySystem />
      <Tools />
      <Patterns />
      <SystemPrompt />
      <Codenames />
      <CyberRisk />
      <FeatureFlags />
      <Footer />
    </>
  );
}
