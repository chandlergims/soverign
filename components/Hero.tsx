"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Lock,
  ShieldCheck,
  Cpu,
  UserX,
  AlertTriangle,
  GitBranch,
  FileCheck,
  FileText,
  Coins,
  ArrowRight,
} from "lucide-react";
import { PLACEHOLDER } from "@/lib/constants";
import SpwnOverview from "./SpwnOverview";

// Load GridScan client-only (no SSR — needs WebGL)
const GridScan = dynamic(() => import("./GridScan"), { ssr: false });

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const stats = [
  { icon: UserX,      label: "Human Involvement", value: "Zero",       note: "Cryptographically proven", accent: true },
  { icon: Lock,       label: "Private Key",        value: "TEE-Born",  note: "Never left the enclave",  accent: false },
  { icon: ShieldCheck,label: "Attestation",        value: "Verified",  note: "Hardware-signed proof",   accent: true },
  { icon: Cpu,        label: "TEE Platform",       value: "EigenCloud",note: "EigenCompute",            accent: false },
];

const sections = [
  { icon: AlertTriangle, label: "No Humans",    href: "/problem",        description: "Every token has a human. Why that makes it breakable." },
  { icon: GitBranch,     label: "Origin",       href: "/how-it-happened",description: "The 6-step creation pipeline — sealed enclave to live token." },
  { icon: FileCheck,     label: "TEE Proof",    href: "/proof",          description: "The cryptographic attestation. Don't trust it — verify it." },
  { icon: FileText,      label: "Paper",        href: "/paper",          description: "Long-form essay on autonomous creation and verifiable decentralization." },
  { icon: Coins,         label: "$Sovereign",        href: "/token",          description: "Contract, deployer wallet, attestation hash, and buy links." },
];

export default function Hero() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* ─── HERO: dark section with GridScan background ─── */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#060608]">
        {/* WebGL grid background — static, no cursor interaction */}
        <GridScan
          linesColor="#e3e3e3"
          scanColor="#58e34f"
          lineThickness={1.7}
          gridScale={0.19}
          lineJitter={0}
          scanOpacity={0.5}
          scanGlow={0.1}
          noiseIntensity={0}
          bloomIntensity={0.25}
          sensitivity={0.4}
          disableMouse={true}
        />

        {/* Dark gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/60 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-8 pt-20 pb-8 w-full">
          {/* Top label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-[11px] text-[#666] tracking-[0.25em] uppercase mb-5"
          >
            Sovereign — $Sovereign
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.07, ease }}
            className="font-mono font-bold text-[28px] md:text-[42px] lg:text-[50px] leading-[1.1] tracking-tight text-white mb-5"
          >
            The first token not<br className="hidden md:block" /> launched by a human.
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="font-sans text-[15px] md:text-[17px] text-[#aaa] leading-[1.6] max-w-[540px] mb-8"
          >
            No human named it. No human deployed it. No human holds the keys.
            The cryptographic proof is public — verify it yourself.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-7"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              const val = s.accent ? "var(--verified)" : "#bbb";
              const iconColor = s.accent ? "var(--verified)" : "#777";
              return (
                <div key={s.label} className="border border-[#1f1f1f] bg-[#0a0a0a]/90 rounded-md px-3.5 py-3.5 flex flex-col gap-1.5">
                  <Icon size={15} style={{ color: iconColor }} strokeWidth={1.5} />
                  <div>
                    <p className="text-[10px] text-[#555] tracking-wider uppercase mb-0.5">{s.label}</p>
                    <p className="text-[13px] font-semibold" style={{ color: val }}>{s.value}</p>
                    <p className="text-[10px] text-[#444]">{s.note}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Compact proof block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="border border-[#1a1a1a] bg-[#080808] rounded-md p-4 md:p-5 mb-7 font-mono"
          >
            <p className="text-[9px] text-[#444] tracking-[0.2em] uppercase mb-3.5">Verification Receipt</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[11.5px]">
              <div className="flex items-center gap-2"><span className="text-[#555] w-[100px] shrink-0">Token</span><span className="text-white font-semibold">$Sovereign</span></div>
              <div className="flex items-center gap-2"><span className="text-[#555] w-[100px] shrink-0">Network</span><span className="text-[#888]">Solana</span></div>
              <div className="flex items-center gap-2"><span className="text-[#555] w-[100px] shrink-0">Human touch</span><span className="text-[var(--verified)] font-medium">✓ None — verified</span></div>
              <div className="flex items-center gap-2"><span className="text-[#555] w-[100px] shrink-0">TEE Platform</span><span className="text-[#888]">EigenCloud</span></div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#555] w-[100px] shrink-0">Attestation</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#888]">{PLACEHOLDER.ATTESTATION_HASH.slice(0, 8)}...{PLACEHOLDER.ATTESTATION_HASH.slice(-4)}</span>
                  <button onClick={() => handleCopy(PLACEHOLDER.ATTESTATION_HASH, "att")} className="text-[9px] text-[#444] hover:text-[#888] border border-[#1f1f1f] px-1.5 py-0.5 rounded transition-colors">
                    {copied === "att" ? "copied" : "copy"}
                  </button>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#555] w-[100px] shrink-0">Eigen Wallet</span>
                <a href="https://solscan.io/account/2eaCwxajRFzZHZtQ2gX8Ca6qBD6bZ418a71CdiSrzn5K" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  2eaC...zn5K →
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] px-4 py-2 bg-white text-black rounded hover:bg-[#ddd] transition-colors tracking-wide">
              Buy $Sovereign on Jupiter
            </a>
            <a href="https://verify.eigencloud.xyz/app/0xfe82cd3c9c2702f3bb6b1617abf2aaba8b343260" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[#555] hover:text-white transition-colors tracking-wide">
              Verify Attestation →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW: rich two-column with terminal ─── */}
      <SpwnOverview />

      {/* ─── EXPLORE: section cards ─── */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-[var(--bg-subtle)]">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-7"
          >
            Explore
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.055, ease }}
                >
                  <Link href={s.href} className="group block bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4.5 hover:border-[var(--text-muted)] hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-7 h-7 rounded flex items-center justify-center bg-[var(--bg-subtle)]">
                        <Icon size={14} className="text-[var(--text-secondary)]" strokeWidth={1.5} />
                      </div>
                      <ArrowRight size={12} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all duration-150" />
                    </div>
                    <p className="font-mono font-semibold text-[12.5px] text-[var(--text-primary)] mb-1.5">{s.label}</p>
                    <p className="font-sans text-[12.5px] text-[var(--text-secondary)] leading-[1.55]">{s.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
