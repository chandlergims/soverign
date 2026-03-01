"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { PLACEHOLDER } from "@/lib/constants";

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PLACEHOLDER.TOKEN_CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-[80px] md:py-[120px] px-6 md:px-8">
      <div className="max-w-[680px] mx-auto">
        {/* Token name */}
        <ScrollReveal>
          <h2 className="font-mono font-bold text-[32px] md:text-[40px] tracking-tight text-[var(--text-primary)] mb-10">
            $Sovereign
          </h2>
        </ScrollReveal>

        {/* Token data table */}
        <ScrollReveal delay={0.05}>
          <div className="font-mono text-[13px] md:text-[14px] space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="text-[var(--text-muted)] w-[180px] shrink-0">Network</span>
              <span className="text-[var(--text-primary)]">Solana</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="text-[var(--text-muted)] w-[180px] shrink-0">Total Supply</span>
              <span className="text-[var(--text-primary)]">1,000,000,000</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="text-[var(--text-muted)] w-[180px] shrink-0">Deployer</span>
              <span className="text-[var(--text-primary)]">TEE-Secured (no human access)</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="text-[var(--text-muted)] w-[180px] shrink-0">Deployer Wallet</span>
              <span className="flex items-center gap-2 flex-wrap">
                <span className="text-[var(--text-primary)]">
                  {PLACEHOLDER.DEPLOYER_WALLET.slice(0, 4)}...{PLACEHOLDER.DEPLOYER_WALLET.slice(-4)}
                </span>
                <a
                  href={`https://solscan.io/account/${PLACEHOLDER.DEPLOYER_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline text-[12px]"
                >
                  View on Solscan →
                </a>
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="text-[var(--text-muted)] w-[180px] shrink-0">Attestation</span>
              <span className="flex items-center gap-2 flex-wrap">
                <span className="text-[var(--text-primary)]">
                  0xfe82...3260
                </span>
                <a
                  href="https://verify.eigencloud.xyz/app/0xfe82cd3c9c2702f3bb6b1617abf2aaba8b343260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline text-[12px]"
                >
                  Verify Attestation →
                </a>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
