import SubPageLayout from "@/components/SubPageLayout";
import TheProof from "@/components/TheProof";

export const metadata = {
  title: "TEE Proof — spwn.fun",
  description:
    "Don't trust. Verify. The cryptographic attestation proving $SPWN was deployed with zero human involvement — hardware-signed and publicly verifiable.",
};

export default function ProofPage() {
  return (
    <SubPageLayout label="TEE Proof">
      <TheProof />
    </SubPageLayout>
  );
}
