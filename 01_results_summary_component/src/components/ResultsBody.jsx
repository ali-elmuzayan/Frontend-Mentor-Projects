import { ContinueButton } from "./ContinueButton";
import { ResultSummaryCard } from "./ResultSummaryCard";

export default function ResultsBody({ summaries }) {
  return (
    <section className="p-6 space-y-6 sm:w-1/2">
      <h2 className="text-lg font-bold">Summary</h2>
      <ul className="flex flex-col gap-4">
        {summaries.map(({ category, icon, score, color }) => (
          <ResultSummaryCard
            key={category}
            icon={icon}
            title={category}
            score={score}
            color={color}
          />
        ))}
      </ul>
      <ContinueButton />
    </section>
  );
}
