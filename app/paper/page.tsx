import SubPageLayout from "@/components/SubPageLayout";
import Paper from "@/components/Paper";

export const metadata = {
  title: "Paper | Sovereign",
  description:
    "$Sovereign: The First Truly Decentralized Token. A long-form essay on the human dependency problem, trusted execution environments, and verifiable autonomy.",
};

export default function PaperPage() {
  return (
    <SubPageLayout label="Paper">
      <Paper />
    </SubPageLayout>
  );
}
