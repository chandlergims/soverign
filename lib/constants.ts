// Developer wallet — TEE-generated (EigenCloud enclave)
export const PLACEHOLDER = {
  TOKEN_CONTRACT: "7SpWnK9mVz4hGqPxR8bT3cNjYfLe2wDu5XoA1vK9m",
  DEPLOYER_WALLET: "HWZDuZz8duF91YuAziv2XY57fS989hN7AhKxM83oLW8G",
  DEPLOY_TX: "4kxPvR7mNq2tL8bWz5cYfJ3gHnD6eKs9aBoC1uj29f",
  ATTESTATION_HASH: "0xfe82cd3c9c2702f3bb6b1617abf2aaba8b343260",
  ENCLAVE_ID: "enclave-spwn-001",
  CODE_HASH: "a3f8d7c2b9e1f4a6d8c0b2e4f6a8d0c2e4f6a82c1d",
} as const;

export const NAV_LINKS = [
  { label: "no humans", href: "/problem" },
  { label: "origin", href: "/how-it-happened" },
  { label: "tee proof", href: "/proof" },
  { label: "paper", href: "/paper" },
  { label: "$Sovereign", href: "/token" },
] as const;

export const SOCIAL_LINKS = [
  { label: "X / Twitter", href: "#" },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "ENCLAVE INITIALIZATION",
    description:
      "An EigenCloud TEE enclave (EigenCompute) was initialized. Once sealed, the enclave is cryptographically locked. No external access. No SSH. No admin panel. The enclave memory cannot be read or extracted.",
  },
  {
    number: "02",
    title: "WALLET GENERATION",
    description:
      "Inside the sealed enclave, a fresh Solana keypair was generated. The private key was created and stored entirely within the TEE. The key has never existed outside the enclave and cannot be exported.",
    link: {
      label: "View on Solscan →",
      href: `https://solscan.io/account/HWZDuZz8duF91YuAziv2XY57fS989hN7AhKxM83oLW8G`,
      display: "HWZD...LW8G",
      prefix: "Wallet:",
    },
  },
  {
    number: "03",
    title: "TOKEN PARAMETERS",
    description:
      "The token parameters were defined: Name: Sovereign | Ticker: $Sovereign | Supply: 1,000,000,000. All configuration was handled within the TEE environment.",
  },
  {
    number: "04",
    title: "ON-CHAIN DEPLOYMENT",
    description:
      "The token deployment transaction was signed inside the TEE and broadcast to Solana mainnet. The transaction was executed entirely within the sealed enclave.",
  },
  {
    number: "05",
    title: "ATTESTATION",
    description:
      "EigenCloud generated a cryptographic attestation proving: the code running in the enclave was unmodified, the wallet was generated inside the TEE, the deployment transaction was signed inside the TEE, and no external input was received during the process.",
    link: {
      label: "Verify Attestation →",
      href: `https://verify.eigencloud.xyz/app/0xfe82cd3c9c2702f3bb6b1617abf2aaba8b343260`,
      display: "0xfe82...3260",
      prefix: "Attestation:",
    },
  },
  {
    number: "06",
    title: "SEALED",
    description:
      "The enclave remains sealed and cannot be accessed or modified. The private key will never leave the TEE. $Sovereign exists on-chain with its deployer key permanently secured inside the hardware enclave.",
  },
] as const;
