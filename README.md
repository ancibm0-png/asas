# CredSphere – Instant, Tamper-Proof Academic Credentials on Blockchain
  
**Built by Team TRINETRA | November 15, 2025**

**CredSphere** is a **blockchain-powered academic credential platform** that enables **universities to issue verifiable, non-transferable credentials as Soulbound Tokens (SBTs)** on **Ethereum Sepolia**. Students own their achievements forever. Universities and employers verify them in **under 5 seconds** — eliminating weeks of delay and 23% fraud-related rejections.

---

## The Problem

  Ensuring Secure and Instantly Verifiable Academic Credentials.

> **"Students applying for higher education and in the country or internationally may lose admission opportunities due to 3–6 week credential verification delays. 23% of applications are rejected due to suspected document fraud."**

The application addresses the following problems:
- No student ownership of credentials
- Manual verification costs $50–$200 per document
- Forged certificates create trust gaps
- Delays cause missed deadlines and lost opportunities

---

## Tech Stack

```yaml
Frontend:
  - React 18 + TypeScript
  - Vite + TailwindCSS
  - Framer Motion (3D animations)
  - Recharts (analytics)
  - qrcode.react

Blockchain:
  - Ethereum Sepolia Testnet
  - Solidity 0.8.20 + OpenZeppelin
  - Ethers.js v6
  - Soulbound Tokens (EIP-5192 compliant)

Storage & Backend:
  - IPFS via Pinata (decentralized document storage)
  - Supabase PostgreSQL + Auth + RLS
  - 8 tables with Row-Level Security

Deployment:
  - Vercel (live)
  - Netlify compatible

Setup & Installation
1. Clone the Repository
git clone https://github.com/TRINETRA/credsphere.git
cd credsphere

2. Install Dependencies
npm install

3. Configure Environment (.env)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_PINATA_API_KEY=your_pinata_key
VITE_PINATA_SECRET_API_KEY=your_pinata_secret
VITE_CONTRACT_ADDRESS=0x4fc085056423592277734de8D10328C0875C9dA3
VITE_SEPOLIA_RPC=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

4. Run Development Server
npm run dev
Open http://localhost:5173

5. Build for Production
npm run build

Key Features:
Feature					Description
Soulbound Token (SBT) Issuance		Non-transferable NFTs via custom _update override
3D Interactive Credential Wallet	"Flippable, holographic cards with physics"
QR Code & Expiring Share Links		"Secure, trackable sharing"
Public Verification Portal		No wallet needed — verify by token ID or link
Institution Authorization System	Admin approval before issuing
Real-Time Audit Trail			Every action logged on-chain + database
AI Assistant Chatbot			"100+ FAQs, instant support"
Subscription & Promo System		Free for students · TRINETRA = free trial


Team TRINETRA:
Name			Role
Subhadip Mandal		Backend Developer
Monojit Pal		Frontend Developer
Shahil Paul		Database & RLS Engineer
Ritesh K Mondal		UI/UX Designer

Smart Contract:
Address: 0x4fc085056423592277734de8D10328C0875C9dA3
Network: Ethereum Sepolia
View on Etherscan

Deployment:
https://credacad.netlify.app/


License: 
