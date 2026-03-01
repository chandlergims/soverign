"use client";

import ScrollReveal from "./ScrollReveal";
import { STEPS } from "@/lib/constants";

export default function HowItHappened() {
  return (
    <section id="how-it-happened" className="py-[80px] md:py-[120px] px-6 md:px-8">
      <div className="max-w-[720px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="font-mono text-[12px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-4">
            Origin
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-mono font-bold text-[24px] md:text-[32px] leading-[1.2] tracking-tight text-[var(--text-primary)] mb-12">
            The full creation pipeline — from sealed enclave to live token.
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[1px] bg-[var(--border)]" />

          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.05 * (i + 1)}>
                <div className={`step-card relative pl-12 md:pl-16 py-8 ${i === 0 ? 'pt-0' : ''}`}>
                  {/* Step number dot */}
                  <div className="absolute left-[10px] md:left-[14px] top-8 first:top-0 w-[18px] h-[18px] rounded-full border-2 border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center"
                    style={i === 0 ? { top: 0 } : {}}
                  >
                    <div className="w-[6px] h-[6px] rounded-full bg-[var(--text-muted)]" />
                  </div>

                  {/* Step number */}
                  <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.15em] uppercase mb-2">
                    Step {step.number}
                  </p>

                  {/* Step title */}
                  <h3 className="font-mono font-semibold text-[15px] md:text-[16px] text-[var(--text-primary)] tracking-wide mb-3">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-[1.7] mb-3">
                    {step.description}
                  </p>

                  {/* Proof link if exists */}
                  {"link" in step && step.link && (
                    <p className="font-mono text-[12.5px]">
                      <span className="text-[var(--text-muted)]">{step.link.prefix} </span>
                      <span className="text-[var(--text-secondary)]">{step.link.display} </span>
                      <a
                        href={step.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline"
                      >
                        {step.link.label}
                      </a>
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
