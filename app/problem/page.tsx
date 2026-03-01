import SubPageLayout from "@/components/SubPageLayout";
import TheProblem from "@/components/TheProblem";

export const metadata = {
  title: "No Humans | Sovereign",
  description:
    "Every token you've ever bought was launched by a human. Why the deployer wallet is always a liability, and why $Sovereign changes that.",
};

export default function ProblemPage() {
  return (
    <SubPageLayout label="No Humans">
      <TheProblem />
    </SubPageLayout>
  );
}
