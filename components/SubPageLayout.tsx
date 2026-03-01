"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface SubPageLayoutProps {
  children: ReactNode;
  label: string;
}

export default function SubPageLayout({ children, label }: SubPageLayoutProps) {
  return (
    <>
      <Navigation />
      <main>
        {/* Breadcrumb bar */}
        <div className="pt-20 pb-0 px-6 md:px-8">
          <div className="max-w-[720px] mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors tracking-wide group"
            >
              <ArrowLeft
                size={12}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back to Sovereign
              <span className="text-[var(--border)] mx-1">/</span>
              <span className="text-[var(--text-secondary)]">{label}</span>
            </Link>
          </div>
        </div>

        {children}
      </main>
      <Footer />
    </>
  );
}
