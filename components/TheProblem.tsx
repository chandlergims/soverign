"use client";

import ScrollReveal from "./ScrollReveal";

export default function TheProblem() {
  return (
    <section id="problem" className="py-[80px] md:py-[120px] px-6 md:px-8">
      <div className="max-w-[720px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="font-mono text-[12px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-4">
            No Humans
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-mono font-bold text-[24px] md:text-[32px] leading-[1.2] tracking-tight text-[var(--text-primary)] mb-10">
            Every token you&apos;ve ever bought was launched by a human.
          </h2>
        </ScrollReveal>

        {/* Prose paragraphs */}
        <div className="font-sans text-[16px] md:text-[17px] text-[var(--text-secondary)] leading-[1.78]">
          <ScrollReveal delay={0.1}>
            <p className="mb-6">
              Every token on Solana, Ethereum, Base — all of them — was deployed from a wallet
              controlled by a person. That person generated the keypair. That person signed the
              deployment transaction. That person can sign other transactions from that wallet at
              any time. The term &ldquo;decentralized&rdquo; is used loosely, but the deployment itself is
              always centralized to one human. One set of keys. One point of failure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mb-6">
              Even &ldquo;fair launch&rdquo; tokens on pump.fun have a human who created them. That human
              chose when to launch, how much to buy, and retains deployer authority. The private
              key exists on someone&apos;s computer — or worse, on a browser extension they installed
              last week. This is the fundamental attack vector for every rug pull in history: a
              human with keys. A human who can decide, at any moment, to drain the liquidity, mint
              more supply, or simply walk away with the funds.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mb-6">
              Projects call themselves &ldquo;decentralized&rdquo; because governance is distributed or
              because the code is open source. But the act of creation — the moment a token is
              born — has never been decentralized. Every token ever created has a human origin
              story: someone sat at a keyboard, clicked a button, and brought it into existence.
              No one has ever removed the human from that moment. Until now.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>
              A Trusted Execution Environment is a hardware-level secure enclave. Code running
              inside a TEE cannot be observed, modified, or interfered with — not even by the
              person who owns the hardware. When a wallet is generated inside a TEE, the private
              key never leaves the enclave. When a transaction is signed inside a TEE, no human
              hand is involved. And critically — this is provable through cryptographic
              attestation. The hardware itself signs a proof that the code ran untampered, in
              isolation, with no external input. That proof is public. That proof is what makes
              $Sovereign different from every token that came before it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
