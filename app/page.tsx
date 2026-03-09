import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { ZKPrivacySection } from "@/components/zk-privacy-section"
import { SolanaSection } from "@/components/solana-section"
import { X402Section } from "@/components/x402-section"
import { AIEngineSection } from "@/components/ai-engine-section"
import { MemeGeneratorSection } from "@/components/meme-generator-section"
import { ScannerSection } from "@/components/scanner-section"
import { ToolsSection } from "@/components/tools-section"
import { TokenSection } from "@/components/token-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { MatrixBackground } from "@/components/matrix-background"
import { ScanlineOverlay } from "@/components/scanline-overlay"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <MatrixBackground />
      <ScanlineOverlay />
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <AboutSection />
      <ManifestoSection />
      <ZKPrivacySection />
      <SolanaSection />
      <X402Section />
      <AIEngineSection />
      <MemeGeneratorSection />
      <ScannerSection />
      <ToolsSection />
      <TokenSection />
      <EcosystemSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
