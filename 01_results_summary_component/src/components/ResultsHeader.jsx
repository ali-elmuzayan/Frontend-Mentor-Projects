import { ScoreBadge } from "./ScoreBadge";

export default function ResultsHeader({ avgScore, score }) {
  return (
    <div
      className={`w-full sm:flex sm:flex-col sm:justify-between text-white rounded-b-2xl bg-white shadow-lg
        sm:items-center sm:w-1/2 bg-linear-to-b bg-primary-gradient text-center space-y-4 py-6 px-8`}
    >
      <h2 className="text-lg font-medium mb-4">Your Result</h2>
      <ScoreBadge score={score} />
      <div className="space-y-2 mb-4 max-w-xs mx-auto">
        <h3 className="text-xl font-bold">Great</h3>
        <p className="text-sm font-medium text-gray-300">
          You Scored Higher than {avgScore}% of the people who have taken these
          tests.
        </p>
      </div>
    </div>
  );
}
