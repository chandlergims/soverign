"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Key,
  CheckCircle2,
  Terminal,
  Cpu,
  Link as LinkIcon,
} from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

// ── Terminal lines ─────────────────────────────────────────────────────────
const LINES: { text: string; type: "cmd" | "info" | "ok" | "warn" | "blank" }[] = [
  { type: "cmd",   text: "$ eigenlayer-enclave init --sealed" },
  { type: "info",  text: "  Launching EigenCompute TEE instance..." },
  { type: "ok",    text: "✓ Enclave sealed. External access: NONE" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "$ generate-keypair --internal --export-denied" },
  { type: "info",  text: "  Generating ED25519 keypair inside enclave..." },
  { type: "ok",    text: "✓ Private key: [SEALED — NEVER EXPORTED]" },
  { type: "ok",    text: "✓ Public wallet: HWZD...LW8G" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "$ spl-token create --name Sovereign --supply 1000000000" },
  { type: "info",  text: "  Constructing mint instruction..." },
  { type: "info",  text: "  Signing transaction inside TEE..." },
  { type: "info",  text: "  Broadcasting to Solana mainnet..." },
  { type: "ok",    text: "✓ Token deployed: 7SpW...K9m" },
  { type: "ok",    text: "✓ TX confirmed: 4kxP...j29f" },
  { type: "blank", text: "" },
  { type: "cmd",   text: "$ generate-attestation --verify-chain" },
  { type: "info",  text: "  Signing attestation with enclave keys..." },
  { type: "ok",    text: "✓ Hash: 0x7f3a...e891" },
  { type: "ok",    text: "✓ Human involvement: ZERO — VERIFIED" },
];

const LINE_DELAY_MS = 110; // ms per line

function TerminalWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const go = () => {
      setVisible((v) => v + 1);
      i++;
      if (i < LINES.length) setTimeout(go, LINE_DELAY_MS);
    };
    setTimeout(go, 200);
  }, [inView]);

  const colorMap = {
    cmd:   "text-white",
    info:  "text-[#666]",
    ok:    "text-[var(--verified)]",
    warn:  "text-[#f5a623]",
    blank: "",
  };

  return (
    <div ref={ref} className="rounded-xl border border-[#1a1a1a] bg-[#070709] overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#141414]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        <span className="ml-3 font-mono text-[11px] text-[#444] tracking-wider">
          eigencompute-tee — deploy-agent
        </span>
      </div>

      {/* Log output */}
      <div className="p-5 font-mono text-[11.5px] md:text-[12px] leading-[1.75] min-h-[300px]">
        {LINES.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12 }}
            className={colorMap[line.type]}
          >
            {line.text || <span>&nbsp;</span>}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        {visible < LINES.length && (
          <span className="inline-block w-2 h-[14px] bg-[var(--verified)] align-middle animate-pulse" />
        )}
        {visible >= LINES.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-[10px] text-[#333] tracking-[0.15em] uppercase"
          >
            — Process complete. Enclave sealed. —
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Proof pills ────────────────────────────────────────────────────────────
const pills = [
  { icon: Key,          label: "Private key",          detail: "Born + sealed inside TEE" },
  { icon: Shield,       label: "Zero human touch",     detail: "Cryptographically attested" },
  { icon: CheckCircle2, label: "On-chain proof",       detail: "Live Solana mainnet TX" },
  { icon: Cpu,          label: "EigenCloud TEE",       detail: "Hardware-level isolation" },
  { icon: Terminal,     label: "TEE deployment",       detail: "Sealed enclave execution" },
  { icon: LinkIcon,     label: "Public attestation",   detail: "Anyone can verify" },
];

// ── Export ─────────────────────────────────────────────────────────────────
export default function SpwnOverview() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--bg-primary)] border-b border-[var(--border)]">
      <div className="max-w-[1100px] mx-auto">

        {/* Two-column grid: text left, terminal right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.22em] uppercase mb-5"
            >
              What is $Sovereign?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="font-mono font-bold text-[24px] md:text-[30px] leading-[1.2] text-[var(--text-primary)] mb-5"
            >
              No human was involved.<br />The math proves it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="font-sans text-[15px] md:text-[16px] text-[var(--text-primary)] leading-[1.8] mb-4"
            >
              $Sovereign is the first token in the history of cryptocurrency whose creation was
              provably free of human control. Not &ldquo;community controlled.&rdquo; Not &ldquo;developer
              minimized.&rdquo; No human.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-4"
            >
              The token was deployed using a sealed Trusted Execution Environment — hardware so isolated
              that not even the operator can read its memory. The wallet was generated inside the TEE,
              token parameters were defined, transaction signed, and $Sovereign deployed to Solana
              mainnet — all within the sealed enclave.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-8"
            >
              The private key never left the enclave. The cryptographic attestation is public.
              Not a claim — a proof. Verify it yourself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25, ease }}
            >
              <Link
                href="/paper"
                className="inline-flex items-center gap-2 font-mono text-[13px] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
              >
                Read the full story
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right — animated terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <TerminalWindow />
          </motion.div>
        </div>

        {/* Proof pills grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {pills.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="flex items-start gap-3 border border-[var(--border)] rounded-lg p-4 bg-[var(--bg-card)]"
              >
                <div className="mt-0.5 w-7 h-7 rounded flex items-center justify-center bg-[var(--bg-subtle)] shrink-0">
                  <Icon size={14} className="text-[var(--text-secondary)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-mono text-[12px] font-semibold text-[var(--text-primary)] mb-0.5">{p.label}</p>
                  <p className="font-sans text-[11.5px] text-[var(--text-muted)] leading-[1.5]">{p.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
