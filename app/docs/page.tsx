"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Book,
  Shield,
  ArrowLeft,
  Layers,
  Users,
  FileCode,
  Terminal,
  Lock,
  Eye,
  Globe,
  Key,
  Zap,
  Copy,
  Check,
} from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"
import { ScanlineOverlay } from "@/components/scanline-overlay"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: `HexRot Protocol is a next-generation DeFi ecosystem built on Solana, combining zero-knowledge privacy, AI-powered tools, and cross-chain interoperability through the X402 protocol.

Public blockchains expose all transactional data by default — balances, counterparties, movement patterns, and financial behavior. While transparency enables trustless verification, it removes privacy entirely, creating risks for individuals, businesses, and institutions that require confidentiality without compromising security.

Through the use of zero-knowledge proofs, AI meme generation, on-chain scanners, and the X402 cross-chain privacy bridge, HexRot is designed for the modern multi-chain environment.

Our vision is simple: Enable fast, scalable, and private DeFi tools that remain accessible to everyone, regardless of capital or technical expertise.

CORE PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Zero-capital barriers to entry
▸ Privacy as a default, not an option
▸ AI-powered tooling for all users
▸ Cross-chain interoperability
▸ Community-owned governance`,
  },
  {
    id: "zk-proofs",
    title: "ZK Privacy Layer",
    icon: Lock,
    content: `The HexRot proof system (zk-SNARK Circuits) enforces transaction correctness while keeping all sensitive details hidden within cryptographic proofs.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts
▸ Sender identity
▸ Receiver identity  
▸ Metadata and behavioral patterns

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership
▸ Non-negative amounts and balance conservation
▸ Merkle tree membership of notes
▸ Creation of new valid commitments

TECHNICAL SPECIFICATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Proof System: Groth16 zk-SNARKs
▸ Curve: BN254 (alt_bn128)
▸ Proof Size: ~200 bytes
▸ Verification Time: < 10ms
▸ Trusted Setup: MPC ceremony with 1000+ participants

All while maintaining cryptographic integrity and double-spend protection.`,
  },
  {
    id: "solana-integration",
    title: "Solana Integration",
    icon: Zap,
    content: `HexRot Protocol is built natively on Solana for maximum speed and minimal cost.

WHY SOLANA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ 65,000 TPS capacity
▸ 400ms block time
▸ $0.00025 average transaction fee
▸ 1,900+ validators for decentralization

TECHNICAL IMPLEMENTATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROGRAM ARCHITECTURE:
┌─────────────────────────────────────────────┐
│  HexRot Core Program (Rust/Anchor)          │
├─────────────────────────────────────────────┤
│  ▸ ZK Verifier Module                       │
│  ▸ Shielded Pool Manager                    │
│  ▸ Token Bridge Interface                   │
│  ▸ AI Engine Integration                    │
└─────────────────────────────────────────────┘

ACCOUNT STRUCTURE:
▸ Protocol State Account - Global configuration
▸ User Shielded Account - Per-user privacy state
▸ Note Commitment Tree - Merkle tree of deposits
▸ Nullifier Registry - Double-spend prevention

All programs are open-source and audited.`,
  },
  {
    id: "x402-bridge",
    title: "X402 Privacy Bridge",
    icon: Globe,
    content: `The X402 Privacy Bridge is a burn-and-mint mechanism that enables private cross-chain transfers while preserving full unlinkability.

HOW IT WORKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: BURN ON SOURCE CHAIN
Assets are cryptographically burned on the source chain, creating a proof of destruction verified by the bridge protocol.

Step 2: ZK PROOF GENERATION
Zero-knowledge proof is generated to verify the burn event without revealing sender, amount, or destination details.

Step 3: CROSS-CHAIN RELAY
Encrypted proof is relayed to the destination chain through a decentralized network of validators.

Step 4: MINT ON DESTINATION
Assets are minted to a fresh shielded address on the destination chain, preserving complete unlinkability.

SUPPORTED CHAINS:
┌─────────────┬──────────┐
│ Solana      │ LIVE     │
│ Ethereum    │ LIVE     │
│ Polygon     │ LIVE     │
│ Arbitrum    │ LIVE     │
│ Base        │ SOON     │
│ Optimism    │ SOON     │
│ Cosmos      │ SOON     │
│ Avalanche   │ SOON     │
└─────────────┴──────────┘

42+ chains planned for full interoperability.`,
  },
  {
    id: "ai-engine",
    title: "AI Meme Brain",
    icon: Eye,
    content: `HexRot's AI Meme Brain is a neural network trained specifically for crypto culture and meme generation.

CAPABILITIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Meme Generation - Create viral-ready meme content
▸ Token Analysis - AI-powered market sentiment analysis
▸ Narrative Builder - Generate compelling token narratives
▸ Trend Detection - Real-time crypto trend monitoring

TECHNICAL STACK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Base Model: Fine-tuned LLaMA architecture
▸ Training Data: 10M+ crypto memes and narratives
▸ Inference: Edge-optimized for real-time generation
▸ Integration: REST API + WebSocket streaming

USAGE EXAMPLE:
\`\`\`typescript
import { HexRotAI } from '@hexrot/ai-sdk';

const ai = new HexRotAI({ apiKey: 'your-key' });

// Generate a meme
const meme = await ai.generateMeme({
  style: 'wojak',
  theme: 'bullish',
  context: 'SOL breaking ATH'
});

// Analyze token sentiment
const analysis = await ai.analyzeSentiment({
  token: 'HEXROT',
  timeframe: '24h'
});
\`\`\``,
  },
  {
    id: "architecture",
    title: "System Architecture",
    icon: Layers,
    content: `HexRot consists of six modular components working together to enable secure, private, and scalable DeFi.

ARCHITECTURE OVERVIEW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE LAYER                      │
│   Web App  │  Mobile App  │  SDK  │  CLI  │  Wallet Plugin  │
├─────────────────────────────────────────────────────────────┤
│                    API GATEWAY LAYER                         │
│       REST API  │  WebSocket  │  GraphQL  │  RPC            │
├─────────────────────────────────────────────────────────────┤
│                    CORE PROTOCOL LAYER                       │
│  ZK Prover  │  AI Engine  │  Scanner  │  Bridge Router      │
├─────────────────────────────────────────────────────────────┤
│                    BLOCKCHAIN LAYER                          │
│     Solana Programs  │  EVM Contracts  │  Cosmos Modules    │
├─────────────────────────────────────────────────────────────┤
│                    DATA LAYER                                │
│   Merkle Trees  │  Nullifier Sets  │  State Commitments     │
└─────────────────────────────────────────────────────────────┘

COMPONENT DETAILS:
▸ ZK Prover - Generates and verifies zero-knowledge proofs
▸ AI Engine - Powers meme generation and analysis
▸ Scanner - On-chain transaction analysis tool
▸ Bridge Router - Manages cross-chain asset transfers`,
  },
  {
    id: "developer-sdk",
    title: "Developer SDK",
    icon: FileCode,
    content: `Build privacy-preserving applications with our comprehensive SDK.

INSTALLATION:
\`\`\`bash
npm install @hexrot/core @hexrot/bridge @hexrot/ai-sdk
\`\`\`

QUICK START:
\`\`\`typescript
import { HexRot, ShieldedPool, X402Bridge } from '@hexrot/core';

// Initialize HexRot
const hexrot = new HexRot({
  network: 'mainnet',
  rpcUrl: 'https://api.mainnet-beta.solana.com'
});

// Create a shielded deposit
const deposit = await hexrot.shield({
  amount: 100,
  token: 'SOL',
  recipient: 'shielded_address'
});

// Private transfer
const transfer = await ShieldedPool.transfer({
  from: deposit.note,
  to: 'recipient_shielded_address',
  amount: 50
});

// Cross-chain bridge
const bridge = await X402Bridge.transfer({
  from: 'solana',
  to: 'ethereum',
  amount: 25,
  preservePrivacy: true
});
\`\`\`

AVAILABLE PACKAGES:
▸ @hexrot/core - Core privacy primitives
▸ @hexrot/bridge - X402 cross-chain bridge
▸ @hexrot/ai-sdk - AI meme engine SDK
▸ @hexrot/scanner - On-chain analysis tools
▸ @hexrot/wallet - Wallet integration helpers`,
  },
  {
    id: "tokenomics",
    title: "$HEXROT Tokenomics",
    icon: Key,
    content: `$HEXROT is the native token powering the HexRot Protocol ecosystem.

TOKEN DISTRIBUTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Community Pool       ████████████████████░░░░░░░░░░  40%
Development Fund     ████████████░░░░░░░░░░░░░░░░░░  25%
Team (4yr vest)      ██████░░░░░░░░░░░░░░░░░░░░░░░░  15%
Liquidity            █████░░░░░░░░░░░░░░░░░░░░░░░░░  12%
Treasury             ████░░░░░░░░░░░░░░░░░░░░░░░░░░   8%

TOKEN UTILITY:
▸ Governance voting on protocol upgrades
▸ Staking for network security
▸ Fee discounts on private transactions
▸ Access to premium AI features
▸ Cross-chain bridge collateral
▸ Revenue sharing from protocol fees

VESTING SCHEDULE:
Team tokens are locked with 4-year linear vesting and 1-year cliff.
No investor allocation - 100% community fair launch.

CONTRACT ADDRESS:
HxR0t...COMING_SOON (TBA at launch)`,
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    content: `HexRot emphasizes trust minimization, censorship resistance, and cryptographic rigor at every layer.

SECURITY PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Trust Minimization - Every component minimizes trust assumptions
▸ Censorship Resistance - Transactions cannot be blocked or filtered
▸ Cryptographic Rigor - Battle-tested, formally verified primitives
▸ Secure Upgrades - Timelocks allow users to exit before changes
▸ Safe Multi-Chain - Cryptographic proofs, not trusted bridges

AUDIT STATUS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Core Protocol: Audited by [TBA]
▸ ZK Circuits: Formally verified
▸ Bridge Contracts: Multi-sig audited
▸ Bug Bounty: Up to $100,000 rewards

BUG BOUNTY PROGRAM:
┌────────────────┬─────────────┐
│ Critical       │ $100,000    │
│ High           │ $50,000     │
│ Medium         │ $10,000     │
│ Low            │ $1,000      │
└────────────────┴─────────────┘

Report vulnerabilities to: security@hexrot.protocol`,
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    content: `HexRot is built by the community, for the community.

OFFICIAL CHANNELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter): https://x.com/HexrotPro
▸ Discord: Coming soon
▸ Telegram: Coming soon
▸ GitHub: Open source

GOVERNANCE:
The HexRot DAO controls protocol parameters. Stake $HEXROT to vote on:
▸ Protocol upgrades and parameters
▸ Treasury allocations
▸ New chain integrations
▸ Ecosystem grants
▸ Fee structures

CONTRIBUTOR PROGRAMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Developer Grants - Build on HexRot, earn rewards
▸ Bug Bounty - Find vulnerabilities, get paid
▸ Ambassador Program - Spread the word, earn tokens
▸ Content Creation - Create educational content
▸ Translation - Help localize documentation

Privacy is a human right. Memes are a universal language. 
Join us in building the chaotic future of DeFi.`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0])
  const [copied, setCopied] = useState(false)

  const contractAddress = "HxR0t...COMING_SOON"

  const copyCA = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black relative">
      <MatrixBackground />
      <ScanlineOverlay />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[#00ff00]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#00ff00]/50 hover:text-[#00ff00] transition-colors font-mono"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            <div className="w-px h-6 bg-[#00ff00]/20" />
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg overflow-hidden border border-[#00ff00]/50">
                  <Image src="/images/hexrot.jpeg" alt="HexRot" fill className="object-cover" />
                </div>
              </div>
              <span className="font-bold font-mono">
                <span className="text-[#00ff00]">Hex</span>
                <span className="text-[#39ff14]">Rot</span>
                <span className="text-[#00ff00]/50"> Docs</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {/* CA Button */}
            <button
              onClick={copyCA}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded glass-card border border-[#00ff00]/30 hover:border-[#00ff00] transition-all text-xs font-mono"
            >
              <span className="text-[#00ff00]/50">CA:</span>
              <span className="text-[#00ff00]">HxR0t...</span>
              {copied ? <Check className="w-3 h-3 text-[#39ff14]" /> : <Copy className="w-3 h-3 text-[#00ff00]/50" />}
            </button>
            <Link
              href="/terminal"
              className="px-4 py-2 rounded-lg glass-card border border-[#00ff00]/30 text-sm text-[#00ff00]/50 hover:text-[#00ff00] hover:border-[#00ff00] transition-all font-mono flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Terminal
            </Link>
            <Link
              href="https://x.com/HexrotPro"
              target="_blank"
              className="px-4 py-2 rounded-lg glass-card border border-[#00ff00]/30 text-sm text-[#00ff00]/50 hover:text-[#00ff00] hover:border-[#00ff00] transition-all font-mono flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav className="glass-card rounded-xl p-4 border border-[#00ff00]/20">
              <h3 className="text-xs font-mono text-[#00ff00]/30 uppercase tracking-widest mb-4 px-3">
                [ DOCUMENTATION ]
              </h3>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 font-mono text-sm ${
                        activeSection.id === section.id
                          ? "bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00]/30"
                          : "text-[#00ff00]/50 hover:text-[#00ff00] hover:bg-[#00ff00]/5"
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span>{section.title}</span>
                      {activeSection.id === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="glass-card rounded-xl p-8 lg:p-12 border border-[#00ff00]/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                <activeSection.icon className="w-7 h-7 text-[#00ff00]" />
              </div>
              <h1 className="text-3xl font-black text-[#00ff00] font-mono">{activeSection.title}</h1>
            </div>
            <div className="prose prose-invert max-w-none">
              {activeSection.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[#00ff00]/60 leading-relaxed mb-4 whitespace-pre-wrap font-mono text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
