export function ScoreBadge({ score = 100 }) {
  return (
    <div className="p-8 rounded-full bg-linear-to-b bg-circle-gradient w-32 sm:w-36 h-32 sm:h-36 mx-auto flex flex-col items-center justify-center">
      <div className="align-center space-y-0.5 text-center">
        <h2 className="text-5xl font-bold">{score}</h2>
        <p className="text-sm text-gray-300">of 100</p>
      </div>
    </div>
  );
}
