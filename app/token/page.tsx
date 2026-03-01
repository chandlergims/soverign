import SubPageLayout from "@/components/SubPageLayout";
import TokenInfo from "@/components/TokenInfo";

export const metadata = {
  title: "$Sovereign — Sovereign",
  description:
    "$Sovereign token details — deployer wallet and attestation hash.",
};

export default function TokenPage() {
  return (
    <SubPageLayout label="$Sovereign">
      <TokenInfo />
    </SubPageLayout>
  );
}
