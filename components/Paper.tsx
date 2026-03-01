"use client";

import ScrollReveal from "./ScrollReveal";

export default function Paper() {
  return (
    <section id="paper" className="py-[80px] md:py-[120px] px-6 md:px-8">
      <div className="max-w-[680px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="font-mono text-[12px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-4">
            Paper
          </p>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-mono font-bold text-[22px] md:text-[28px] leading-[1.3] tracking-tight text-[var(--text-primary)] mb-12">
            $Sovereign: The First Truly Decentralized Token
          </h2>
        </ScrollReveal>

        {/* Full essay */}
        <ScrollReveal delay={0.1}>
          <div className="prose-essay">
            <p>
              Decentralization is the foundational promise of cryptocurrency. The entire
              movement was built on the idea that no single entity should control financial
              infrastructure. Yet there is a contradiction at the heart of nearly every
              token in existence: the moment of creation — the most important event in a
              token&apos;s lifecycle — is always centralized. A person sits at a computer,
              generates a wallet, configures the token&apos;s parameters, signs the deployment
              transaction, and broadcasts it to the network. That person holds the deployer
              wallet&apos;s private key. That person can, at any time, sign additional
              transactions from that wallet. The token may call itself decentralized, but
              its origin story is anything but. $Sovereign was created to close that gap.
            </p>

            <h3>The Human Dependency Problem</h3>

            <p>
              Consider what happens when a typical token is launched. A developer — or
              increasingly, a non-technical user on a launchpad like pump.fun — creates a
              new wallet. That wallet is funded with SOL to pay for transaction fees. The
              user then either writes a smart contract or uses a no-code interface to
              define the token: its name, symbol, supply, and other parameters. They sign
              the deployment transaction with their wallet&apos;s private key and submit it to the
              Solana network. The token is born.
            </p>

            <p>
              At every step of this process, a human is in control. The private key that
              deployed the token exists on someone&apos;s hard drive, in someone&apos;s browser
              extension, or — at best — on someone&apos;s hardware wallet in a desk drawer. If
              that person decides to drain the liquidity pool, they can. If they decide to
              mint additional tokens and dump them, the smart contract may allow it. If
              they simply vanish, the deployer wallet remains a permanent question mark
              hanging over the project.
            </p>

            <p>
              Even projects claiming autonomy still involve humans in the deployment process.
              The private key exists on someone&apos;s computer — or worse, on a browser extension
              they installed last week. This is the fundamental attack vector: a
              human with keys. A human who can decide, at any moment, to drain the liquidity, mint
              more supply, or simply walk away with the funds.
            </p>

            <h3>What Is a Trusted Execution Environment?</h3>

            <p>
              A Trusted Execution Environment, or TEE, is a secure zone inside a
              processor that provides hardware-level isolation for code and data. When
              software runs inside a TEE, it is shielded from everything outside the
              enclave: the operating system, the hypervisor, other applications, and
              crucially, the human who administers the machine. Technologies like Intel
              SGX, AMD SEV, and ARM TrustZone implement TEEs at the silicon level. These
              are not software sandboxes that can be bypassed — they are enforced by the
              CPU itself.
            </p>

            <p>
              The critical property of a TEE is attestation. When code runs inside an
              enclave, the hardware generates a cryptographic attestation — a signed proof
              of exactly what code executed, that it wasn&apos;t modified, and that no external
              party injected data or instructions into the execution. This attestation is
              signed by keys embedded in the processor at manufacturing time. Verifying
              the attestation does not require trusting the enclave operator, the cloud
              provider, or any third party. You only need to trust the hardware
              manufacturer&apos;s root key — the same trust assumption that underpins billions
              of dollars of enterprise confidential computing.
            </p>

            <p>
              EigenCloud&apos;s EigenCompute platform makes TEEs accessible to developers by
              providing managed confidential computing infrastructure. Their vision is a
              &ldquo;verifiable cloud&rdquo; — where developers can run applications with the same
              trust guarantees as on-chain smart contracts, but with the performance and
              flexibility of traditional cloud compute. $Sovereign was deployed using this
              infrastructure.
            </p>

            <h3>How $Sovereign Was Created</h3>

            <p>
              The creation of $Sovereign followed a pipeline using EigenCloud's EigenCompute TEE
              infrastructure. The enclave was sealed — cryptographically locked such
              that no external party could read its memory, inject instructions, or extract
              data. There is no SSH access, no admin panel, no API endpoint that allows
              external control.
            </p>

            <p>
              Inside the sealed enclave, a fresh Solana keypair was generated. This
              is the critical difference from every other token launch: the private key was
              born inside the TEE. It has never existed outside of it. No human generated
              this key. No human has ever seen it. No human can export it. The key exists
              solely within the enclave&apos;s protected memory.
            </p>

            <p>
              The token parameters were defined — name, ticker symbol, and total supply — 
              and the deployment transaction was constructed and signed
              with the enclave-generated private key, then broadcast to Solana
              mainnet. The token went live with the deployer key secured permanently
              inside the TEE.
            </p>

            <h3>Verifiable Autonomy</h3>

            <p>
              After deployment, EigenCloud generated a cryptographic attestation for the
              enclave session. This attestation is not a claim or a promise — it is a
              hardware-signed proof. It confirms that the code running in the enclave was
              the expected, unmodified code; that a wallet keypair was generated inside the
              TEE; that the token deployment transaction was signed inside the TEE; and
              that no external input was received during the entire process.
            </p>

            <p>
              This attestation is publicly available. Anyone can take the attestation hash
              and verify it against EigenCloud&apos;s verification infrastructure. The
              verification does not require permission, does not require trusting the $Sovereign
              team, and does not require specialized tools. It is a standard cryptographic
              verification that proves the chain of events described above.
            </p>

            <p>
              The only way to falsify this attestation would be to compromise the TEE
              hardware manufacturer&apos;s root signing keys — an attack that would not just
              affect $Sovereign but would undermine the entire confidential computing industry,
              including the security infrastructure used by major financial institutions,
              healthcare providers, and government agencies worldwide.
            </p>

            <h3>What This Means</h3>

            <p>
              $Sovereign is a proof of concept for a new category: tokens whose creation event
              is fully autonomous and cryptographically verifiable. If no human deployed
              it, no human can rug it. The deployer wallet is sealed inside an enclave
              that no one — not the team, not the cloud provider, not anyone — can access.
              The private key will never leave the TEE. There is no backdoor. There is no
              override.
            </p>

            <p>
              This is not about being anti-human. It is about proving that true
              decentralization — decentralization of the creation event itself, not just
              governance or consensus — is now technically possible. For the first time in
              the history of cryptocurrency, a token exists whose origin is provably free
              of human control. The deployer is not anonymous. The deployer is not
              pseudonymous. The deployer is not human.
            </p>

            <p>
              $Sovereign is the first. It won&apos;t be the last.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
