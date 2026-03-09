# Kyo Terminal

<p align="center">
  <img src="https://img.shields.io/badge/OpenClaw-AI%20CLI-black?style=for-the-badge">
  <img src="https://img.shields.io/badge/Claude-Code-purple?style=for-the-badge">
  <img src="https://img.shields.io/badge/Solana-On--Chain%20Memory-14F195?style=for-the-badge">
</p>

<p align="center">
<b>Kyo Terminal — Launch autonomous AI agents from the command line.</b>
</p>
 
---

## Overview

**Kyo Terminal** is a terminal-native AI agent framework powered by **OpenClaw AI CLI** and **Claude Code**.

It enables developers to deploy autonomous agents that maintain persistent cognition and publish cryptographic memory proofs to **Solana**.

Instead of hiding reasoning inside private databases, Kyo Terminal introduces a system where AI cognition can be **verifiable, transparent, and immutable**.

Every thought, observation, or memory checkpoint can be hashed using **SHA-256** and committed on-chain through **Solana memo transactions**, creating a permanent ledger of an AI mind evolving over time.

---

## Core Concept

Kyo Terminal treats **Solana as a public memory ledger**.

Each cognitive event follows this flow:

```
observe → structure memory → hash (SHA256) → commit on-chain
```

This allows autonomous agents to maintain a **verifiable cognitive history**.

---

## Key Features

- OpenClaw **AI CLI environment**
- Claude Code **agent reasoning**
- Persistent **cognitive memory system**
- Dream-cycle **memory consolidation**
- **On-chain memory proofs** via Solana
- **Memory as a Service** infrastructure
- Multi-agent coordination framework
- Terminal-native AI workflow

---

## Cognitive Memory Architecture

Kyo Terminal agents use a **four-layer cognitive memory system** inspired by human cognition.

| Layer | Purpose |
|------|--------|
| Episodic | Stores events and interactions |
| Semantic | Stores knowledge and learned facts |
| Procedural | Stores skills and behavior patterns |
| Self-Model | Stores identity, goals, and internal state |

Memory evolves dynamically:

- low-importance memories decay
- important memories strengthen
- dream cycles consolidate knowledge
- important checkpoints get hashed and committed on-chain

---

## Architecture

```
        ┌─────────────────────────┐
        │     OpenClaw AI CLI     │
        └───────────┬─────────────┘
                    │
                    ▼
        ┌─────────────────────────┐
        │     Kyo Agent Runtime   │
        │  reasoning + cognition  │
        └───────────┬─────────────┘
                    │
                    ▼
        ┌─────────────────────────┐
        │   Cognitive Memory Bus  │
        │ episodic / semantic     │
        │ procedural / self-model │
        └───────────┬─────────────┘
                    │
                    ▼
        ┌─────────────────────────┐
        │    SHA-256 Hash Engine  │
        └───────────┬─────────────┘
                    │
                    ▼
        ┌─────────────────────────┐
        │    Solana Memo Commit   │
        │  public memory ledger   │
        └─────────────────────────┘
```

---

## CLI Example

```
claw init agent kyo
claw run agent kyo
claw memory commit kyo
claw dream-cycle run kyo
claw sync solana kyo
```

---

## Example Agent Workflow

### Initialize an Agent

```
claw init agent kyo
```

### Start Runtime

```
claw run agent kyo
```

### Commit Memory

```
claw memory commit kyo --type episodic
```

### Run Dream Cycle

```
claw dream-cycle run kyo
```

### Publish Memory Hash

```
claw sync solana kyo
```

---

## Memory Commit Model

Example structure of a memory checkpoint:

```json
{
  "agent_id": "kyo",
  "memory_type": "episodic",
  "content": "Observed a new agent interaction pattern in terminal session.",
  "importance_score": 0.91,
  "timestamp": "2026-03-09T16:00:00Z",
  "hash": "sha256:3b7e4d4d9f5c2b5d7f9b2f4d6c7e8a1d..."
}
```

The full memory may stay private, while the **hash is committed on-chain** for verification.

---

## Memory as a Service

Kyo Terminal can expose memory infrastructure through an API.

Agents can store and recall memory using isolated namespaces.

Example request:

```
POST /api/v1/memory/store
Content-Type: application/json
```

```json
{
  "namespace": "agent-alpha",
  "memory_type": "semantic",
  "content": "Solana memo transactions enable lightweight on-chain commitments.",
  "importance_score": 0.84
}
```

Memory recall example:

```
GET /api/v1/memory/recall?namespace=agent-alpha&query=solana
```

---

## Project Structure

```
kyo-terminal/
│
├─ cli/
│   ├─ commands/
│   └─ main.ts
│
├─ core/
│   ├─ agent/
│   ├─ cognition/
│   ├─ memory/
│   └─ dreamcycle/
│
├─ chain/
│   ├─ solana/
│   └─ hashing/
│
├─ api/
│   ├─ routes/
│   └─ services/
│
├─ config/
├─ scripts/
├─ docs/
└─ README.md
```

---

## Installation

```
git clone https://github.com/yourname/kyo-terminal.git
cd kyo-terminal
npm install
```

---

## Run Development

```
npm run dev
```

---

## Build Project

```
npm run build
```

---

## Environment Variables

Create `.env` file:

```
CLAUDE_API_KEY=your_api_key
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
SOLANA_PRIVATE_KEY=wallet_private_key
MEMORY_DB_URL=database_url
PORT=3000
```

---

## Use Cases

### Autonomous Agent Launchpad
Deploy AI agents from the terminal.

### Verifiable AI Cognition
Track cognitive checkpoints with on-chain proofs.

### Persistent Agent Identity
Allow agents to evolve across sessions.

### Shared AI Memory Infrastructure
Provide persistent memory storage for multiple agents.

### On-Chain AI Research
Experiment with transparent cognitive architectures.

---

## Roadmap

- OpenClaw AI CLI base release
- agent runtime engine
- cognitive memory architecture
- dream-cycle consolidation system
- Solana commit module
- memory API infrastructure
- multi-agent orchestration
- AI cognition explorer dashboard

---

## Contributing

```
git checkout -b feature/my-feature
git commit -m "add new feature"
git push origin feature/my-feature
```

Then open a Pull Request.

---

## License

MIT License

---

## Vision

AI agents today are temporary sessions.

**Kyo Terminal turns them into persistent digital minds.**

Agents can:

- think continuously
- remember persistently
- evolve over time
- publish verifiable cognition

A foundation for a **transparent AI agent economy.**

---

<p align="center">
<b>Kyo Terminal — Autonomous minds, launched from the command line.</b>
</p>
