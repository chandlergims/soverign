import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sovereign",
  description:
    "$Sovereign was created and deployed entirely inside a Trusted Execution Environment (TEE) on EigenCloud. No human accessed the wallet. No human signed the transaction. Cryptographically verified.",
  keywords: [
    "Sovereign",
    "token",
    "TEE",
    "Solana",
    "crypto",
    "EigenCloud",
    "decentralized",
  ],
  icons: {
    icon: "/Untitled_design_-_2026-03-01T163121.706.png",
  },
  openGraph: {
    title: "Sovereign",
    description:
      "$Sovereign was created and deployed entirely inside a TEE. No human accessed the wallet. No human signed the transaction. Verifiable proof.",
    siteName: "Sovereign",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sovereign",
    description:
      "$Sovereign was created inside a TEE. No human accessed the wallet. No human signed the transaction. Cryptographically verified.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
