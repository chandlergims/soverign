import SubPageLayout from "@/components/SubPageLayout";
import TheProof from "@/components/TheProof";

export const metadata = {
  title: "TEE Proof | Sovereign",
  description:
    "Don't trust. Verify. The cryptographic attestation proving $Sovereign was deployed with zero human involvement — hardware-signed and publicly verifiable.",
};

export default function ProofPage() {
  return (
    <SubPageLayout label="TEE Proof">
      <TheProof />
    </SubPageLayout>
  );
}
