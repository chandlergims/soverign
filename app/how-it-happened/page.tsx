import SubPageLayout from "@/components/SubPageLayout";
import HowItHappened from "@/components/HowItHappened";

export const metadata = {
  title: "Origin — spwn.fun",
  description:
    "The full 6-step creation pipeline: from sealed TEE enclave initialization to live Solana token deployment. No human involved at any stage.",
};

export default function HowItHappenedPage() {
  return (
    <SubPageLayout label="Origin">
      <HowItHappened />
    </SubPageLayout>
  );
}
