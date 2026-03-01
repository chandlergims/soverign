"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-[80px] md:py-[120px] px-6 md:px-8 border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <p className="font-mono font-bold text-[20px] tracking-tight text-[var(--text-primary)] mb-4">
            Sovereign
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="font-sans text-[14px] text-[var(--text-secondary)] mb-8">
            The first token not launched by a human.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-6 md:gap-8 mb-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[12px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-sans text-[13px] text-[var(--text-muted)]">
            No human holds the keys. No human ever will.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
