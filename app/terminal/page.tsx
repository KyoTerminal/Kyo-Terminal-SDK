"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Book, Copy, Check } from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"
import { ScanlineOverlay } from "@/components/scanline-overlay"

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "info" | "privacy"
  content: string
}

const commands: Record<string, string> = {
  help: `
╔══════════════════════════════════════════════════════════════════╗
║                   HEXROT PROTOCOL TERMINAL v1.0                  ║
╠══════════════════════════════════════════════════════════════════╣
║  PROTOCOL COMMANDS                                               ║
║  ────────────────────────────────────────────────────────────── ║
║  help          - Display this help menu                         ║
║  about         - What is HexRot Protocol?                       ║
║  vision        - Our vision for DeFi                            ║
║  zk            - Learn about Zero-Knowledge Privacy             ║
║  solana        - Solana integration details                     ║
║  x402          - X402 Privacy Bridge protocol                   ║
║  ai            - AI Meme Brain engine                           ║
║  tokenomics    - $HEXROT token information                      ║
║  roadmap       - Development roadmap                            ║
║  team          - Who we are                                     ║
║  social        - Official channels                              ║
║  ca            - Contract address                               ║
║  ────────────────────────────────────────────────────────────── ║
║  UTILITY COMMANDS                                                ║
║  ────────────────────────────────────────────────────────────── ║
║  clear         - Clear terminal                                 ║
║  version       - Version info                                   ║
║  status        - Network status                                 ║
║  meme          - Generate a random meme phrase                  ║
║  gm            - Say gm                                         ║
╚══════════════════════════════════════════════════════════════════╝`,
  about: `
┌─────────────────────────────────────────────────────────────────┐
│                     ABOUT HEXROT PROTOCOL                       │
└─────────────────────────────────────────────────────────────────┘

HexRot Protocol is a builder-first DeFi ecosystem on Solana 
combining zero-knowledge privacy, AI-powered tools, and cross-chain
interoperability through the X402 protocol.

WHAT WE DO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ ZK Privacy       - Zero-knowledge shielded transactions
▸ AI Meme Brain    - Neural network trained on crypto culture
▸ On-Chain Scanner - Real-time transaction analysis
▸ X402 Bridge      - Cross-chain privacy transfers
▸ Builder Tools    - Zero-capital required tooling

THE PROBLEM:
Public blockchains expose all data — balances, counterparties,
movement patterns. This removes privacy entirely.

THE SOLUTION:
HexRot restores privacy while providing powerful tools that
anyone can use, regardless of capital or technical expertise.

→ Follow us: https://x.com/HexrotPro`,
  vision: `
┌─────────────────────────────────────────────────────────────────┐
│                        OUR VISION                               │
└─────────────────────────────────────────────────────────────────┘

Enable fast, scalable, and private DeFi tools accessible to
everyone - zero capital required, maximum chaos enabled.

CORE VALUE PROPOSITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✔ PRIVATE BY DEFAULT
Zero-knowledge shielding hides transaction amounts, sender and
receiver identities, metadata, and behavioral patterns.

✔ BUILDER-FIRST
No capital requirements. No gatekeeping. Tools that empower
everyone to participate in DeFi.

✔ AI-POWERED
Neural networks trained on crypto culture for meme generation,
sentiment analysis, and market insights.

✔ CROSS-CHAIN
X402 burn-and-mint privacy bridge enables assets to move between
chains while preserving full unlinkability.

✔ SOLANA-NATIVE
Built on the fastest blockchain. 65K TPS, 400ms finality,
sub-cent fees.`,
  zk: `
┌─────────────────────────────────────────────────────────────────┐
│                  ZERO-KNOWLEDGE PRIVACY                         │
└─────────────────────────────────────────────────────────────────┘

HexRot uses zk-SNARK circuits to enforce transaction correctness
while keeping all sensitive details hidden.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts         [HIDDEN]
▸ Sender identity             [HIDDEN]
▸ Receiver identity           [HIDDEN]
▸ Metadata & patterns         [HIDDEN]

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership      [VERIFIED]
▸ Non-negative amounts        [VERIFIED]
▸ Balance conservation        [VERIFIED]
▸ Merkle tree membership      [VERIFIED]

TECHNICAL SPECS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Proof System: Groth16 zk-SNARKs
▸ Curve: BN254 (alt_bn128)
▸ Proof Size: ~200 bytes
▸ Verification Time: < 10ms

All while maintaining cryptographic integrity and double-spend
protection.`,
  solana: `
┌─────────────────────────────────────────────────────────────────┐
│                    SOLANA INTEGRATION                           │
└─────────────────────────────────────────────────────────────────┘

HexRot Protocol is built natively on Solana for maximum speed
and minimal cost.

WHY SOLANA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ 65,000 TPS       - Transactions per second capacity
▸ 400ms            - Block time finality
▸ $0.00025         - Average transaction fee
▸ 1,900+           - Active validators

NETWORK STATUS:
┌────────────────────┬────────────────────────────────────────────┐
│ Total Transactions │ 250B+                                      │
│ Current TPS        │ 3,500                                      │
│ Active Accounts    │ 15M+                                       │
│ Staked SOL         │ 380M                                       │
│ Network Uptime     │ 99.99%                                     │
└────────────────────┴────────────────────────────────────────────┘

Solana scales with us. No congestion, no gas spikes, just smooth
operations at any volume.`,
  x402: `
┌─────────────────────────────────────────────────────────────────┐
│                   X402 PRIVACY BRIDGE                           │
└─────────────────────────────────────────────────────────────────┘

The X402 Privacy Bridge enables private cross-chain transfers
while preserving full unlinkability.

PROTOCOL FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[01] BURN ON SOURCE CHAIN
     Assets cryptographically burned, proof of destruction created

[02] ZK PROOF GENERATION
     Proof verifies burn without revealing sender/amount/destination

[03] CROSS-CHAIN RELAY
     Encrypted proof relayed via decentralized validator network

[04] MINT ON DESTINATION
     Assets minted to fresh shielded address, unlinkability preserved

SUPPORTED CHAINS:
┌─────────────────┬──────────────────────────────────────────────┐
│ Solana          │ ████████████████████ LIVE                    │
│ Ethereum        │ ████████████████████ LIVE                    │
│ Polygon         │ ████████████████████ LIVE                    │
│ Arbitrum        │ ████████████████████ LIVE                    │
│ Base            │ ██████████░░░░░░░░░░ SOON                    │
│ Optimism        │ ██████████░░░░░░░░░░ SOON                    │
└─────────────────┴──────────────────────────────────────────────┘

42+ chains planned for full interoperability.`,
  ai: `
┌─────────────────────────────────────────────────────────────────┐
│                     AI MEME BRAIN                               │
└─────────────────────────────────────────────────────────────────┘

HexRot's AI Meme Brain is a neural network trained specifically
for crypto culture and meme generation.

CAPABILITIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Meme Generation     - Create viral-ready meme content
▸ Token Analysis      - AI-powered market sentiment analysis
▸ Narrative Builder   - Generate compelling token narratives
▸ Trend Detection     - Real-time crypto trend monitoring

TECHNICAL STACK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Base Model: Fine-tuned LLaMA architecture
▸ Training Data: 10M+ crypto memes and narratives
▸ Inference: Edge-optimized for real-time generation
▸ Integration: REST API + WebSocket streaming

The AI Brain never sleeps. It watches. It learns. It memes.`,
  tokenomics: `
┌─────────────────────────────────────────────────────────────────┐
│                   $HEXROT TOKENOMICS                            │
└─────────────────────────────────────────────────────────────────┘

$HEXROT is the native token powering the HexRot Protocol ecosystem.

TOKEN DISTRIBUTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Community Pool       ████████████████████░░░░░░░░░░  40%
Development Fund     ████████████░░░░░░░░░░░░░░░░░░  25%
Team (4yr vest)      ██████░░░░░░░░░░░░░░░░░░░░░░░░  15%
Liquidity            █████░░░░░░░░░░░░░░░░░░░░░░░░░  12%
Treasury             ████░░░░░░░░░░░░░░░░░░░░░░░░░░   8%

TOKEN UTILITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Governance voting on protocol upgrades
▸ Staking for network security
▸ Fee discounts on private transactions
▸ Access to premium AI features
▸ Cross-chain bridge collateral

CONTRACT ADDRESS: HxR0t...COMING_SOON (TBA at launch)`,
  roadmap: `
┌─────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT ROADMAP                          │
└─────────────────────────────────────────────────────────────────┘

PHASE 1: GENESIS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ Protocol design and architecture
├─ Core team formation
├─ Community building
└─ Initial tooling development

PHASE 2: LAUNCH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [IN PROGRESS]
├─ Token launch on Solana
├─ AI Meme Brain deployment
├─ On-chain scanner release
└─ Community expansion

PHASE 3: PRIVACY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [UPCOMING]
├─ ZK Privacy layer deployment
├─ Shielded pool launch
├─ X402 Bridge beta
└─ Multi-chain integration

PHASE 4: DOMINATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [FUTURE]
├─ 42+ chain support
├─ Full DAO governance
├─ Institutional integrations
└─ World domination (jk... unless?)`,
  team: `
┌─────────────────────────────────────────────────────────────────┐
│                     WHO WE ARE                                  │
└─────────────────────────────────────────────────────────────────┘

HexRot was created by a team of degens, builders, and privacy
advocates united by a common belief:

    DeFi should be accessible to everyone.

WE ARE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Chaos architects who embrace the unpredictable
▸ Builder-first mentality - no gatekeeping
▸ Privacy maximalists - your data is YOUR data
▸ Community obsessed - every decision for the community

OUR MANIFESTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
01. Privacy is a right, not a privilege.
02. Capital should not gatekeep opportunity.
03. Memes are the language of the internet.
04. Build in public, ship fast, iterate faster.
05. The best communities are built on chaos.

→ Join the chaos: https://x.com/HexrotPro`,
  social: `
┌─────────────────────────────────────────────────────────────────┐
│                   OFFICIAL CHANNELS                             │
└─────────────────────────────────────────────────────────────────┘

CONNECT WITH HEXROT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter):  https://x.com/HexrotPro
▸ Discord:      Coming soon
▸ Telegram:     Coming soon
▸ GitHub:       Open source

RESOURCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Documentation:  /docs
▸ Terminal:       /terminal (you are here)

Privacy is a human right. Memes are a universal language.
Join us in building the chaotic future of DeFi.`,
  ca: `
┌─────────────────────────────────────────────────────────────────┐
│                   CONTRACT ADDRESS                              │
└─────────────────────────────────────────────────────────────────┘

$HEXROT Contract Address:

  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║    HxR0t...COMING_SOON                                    ║
  ║                                                           ║
  ║    Network: Solana                                        ║
  ║    Status: TBA at launch                                  ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝

Follow @HexrotPro for launch announcements.
Always verify the CA from official sources only.`,
  version: `
HexRot Protocol Terminal v1.0.0
Protocol Version: Alpha
Network: Solana
Security Level: Maximum
Build: 2024.12.18
Status: OPERATIONAL`,
  status: `
┌─────────────────────────────────────────────────────────────────┐
│                    PROTOCOL STATUS                              │
└─────────────────────────────────────────────────────────────────┘

SYSTEM STATUS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ AI Meme Brain      [██████████] OPERATIONAL
▸ On-Chain Scanner   [██████████] ACTIVE
▸ ZK Privacy Layer   [████████░░] DEVELOPMENT
▸ X402 Bridge        [██████░░░░] BETA
▸ Governance         [████░░░░░░] UPCOMING

METRICS:
┌────────────────────┬────────────────────────────────────────────┐
│ AI Memes Generated │ Growing                                    │
│ Scans Completed    │ Expanding                                  │
│ Privacy Level      │ Maximum                                    │
│ Chaos Level        │ OVER 9000                                  │
│ Vibes              │ Immaculate                                 │
└────────────────────┴────────────────────────────────────────────┘

Last sync: ${new Date().toLocaleString()}`,
  meme: `
┌─────────────────────────────────────────────────────────────────┐
│                    MEME GENERATOR                               │
└─────────────────────────────────────────────────────────────────┘

${
  [
    '"Privacy is not about having something to hide. It\'s about having something to protect." - HexRot',
    '"In a world of transparent chains, be the zero-knowledge proof." - Ancient Degen Proverb',
    '"We\'re all gonna make it. But some of us will make it privately." - HexRot',
    '"First they ignore you. Then they laugh at you. Then they ape in." - Crypto Gandhi',
    '"Not your keys, not your coins. Not your privacy, not your freedom." - HexRot',
    '"The best time to buy was yesterday. The best time to go private is now." - HexRot',
    '"WAGMI but like... anonymously." - The HexRot Community',
  ][Math.floor(Math.random() * 7)]
}

Type 'meme' again for another wisdom drop.`,
  gm: `
┌─────────────────────────────────────────────────────────────────┐
│                         GM FREN                                 │
└─────────────────────────────────────────────────────────────────┘

        ██████╗ ███╗   ███╗
       ██╔════╝ ████╗ ████║
       ██║  ███╗██╔████╔██║
       ██║   ██║██║╚██╔╝██║
       ╚██████╔╝██║ ╚═╝ ██║
        ╚═════╝ ╚═╝     ╚═╝

GM from the HexRot Protocol team!

May your transactions be private and your gains be infinite.`,
}

export default function TerminalPage() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "success", content: "       ██╗  ██╗███████╗██╗  ██╗██████╗  ██████╗ ████████╗" },
    { type: "success", content: "       ██║  ██║██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗╚══██╔══╝" },
    { type: "success", content: "       ███████║█████╗   ╚███╔╝ ██████╔╝██║   ██║   ██║   " },
    { type: "success", content: "       ██╔══██║██╔══╝   ██╔██╗ ██╔══██╗██║   ██║   ██║   " },
    { type: "success", content: "       ██║  ██║███████╗██╔╝ ██╗██║  ██║╚██████╔╝   ██║   " },
    { type: "success", content: "       ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   " },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "           HexRot Protocol Terminal v1.0 | The Meme Brain of DeFi" },
    { type: "output", content: "              ZK Privacy • Solana Speed • X402 Bridge • AI Power" },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "\nType 'help' to see available commands. Type 'gm' to say hello.\n" },
  ])
  const [input, setInput] = useState("")
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const contractAddress = "HxR0t...COMING_SOON"

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const copyCA = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setLines((prev) => [...prev, { type: "input", content: `hexrot@protocol:~$ ${cmd}` }])

    if (trimmed === "clear") {
      setLines([
        { type: "output", content: "HexRot Protocol Terminal v1.0" },
        { type: "output", content: "Type 'help' for available commands.\n" },
      ])
      return
    }

    if (commands[trimmed]) {
      const type = trimmed === "gm" || trimmed === "meme" ? "privacy" : "success"
      setLines((prev) => [...prev, { type, content: commands[trimmed] }])
    } else if (trimmed === "") {
      // Do nothing
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: '${trimmed}'\nType 'help' to see available commands.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
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
                <span className="text-[#00ff00]/50"> Terminal</span>
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
              href="/docs"
              className="px-4 py-2 rounded-lg glass-card border border-[#00ff00]/30 text-sm text-[#00ff00]/50 hover:text-[#00ff00] hover:border-[#00ff00] transition-all font-mono flex items-center gap-2"
            >
              <Book className="w-4 h-4" />
              Docs
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="glass-card rounded-xl overflow-hidden border border-[#00ff00]/30">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-[#00ff00]/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="ml-4 text-sm text-[#00ff00]/40 font-mono">hexrot@protocol ~ The Meme Brain of DeFi</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="h-[600px] overflow-y-auto p-6 font-mono text-sm bg-black/40"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`mb-1 whitespace-pre-wrap ${
                  line.type === "input"
                    ? "text-[#39ff14]"
                    : line.type === "error"
                      ? "text-[#ff5f56]"
                      : line.type === "success"
                        ? "text-[#00ff00]"
                        : line.type === "privacy"
                          ? "text-[#00ff00] opacity-70"
                          : "text-[#00ff00]/60"
                }`}
              >
                {line.content}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-[#39ff14]">hexrot@protocol:~$&nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#00ff00] caret-[#00ff00]"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <span className="w-2 h-5 bg-[#00ff00] animate-terminal-blink" />
            </form>
          </div>
        </div>

        {/* Quick commands */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["help", "about", "zk", "solana", "x402", "ai", "ca", "gm"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd)
              }}
              className="px-3 py-1.5 rounded-lg glass-card border border-[#00ff00]/20 text-[#00ff00]/60 hover:text-[#00ff00] hover:border-[#00ff00]/50 transition-all text-xs font-mono"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
