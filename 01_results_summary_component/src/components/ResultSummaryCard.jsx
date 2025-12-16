export function ResultSummaryCard({ icon, title, score, color }) {
  const colorClass = colorVariants[color] || colorVariants.blue;
  return (
    <div className="w-full">
      <div
        className={`flex justify-between items-center ${colorClass} p-4 rounded-lg`}
      >
        <div className="flex items-center gap-3">
          <img src={icon} alt={`${title} icon`} className="w-5 h-5" />
          <div className="text-sm font-medium">{title}</div>
        </div>
        <p className="text-sm">
          <span className="font-bold text-gray-700">{score}</span>
          <span className="text-gray-500">{" / 100"}</span>
        </p>
      </div>
    </div>
  );
}
// Define color variants for different summary cards
// why: because tailwind does not support dynamic class names
// so we need to define them statically
const colorVariants = {
  red: "bg-red-50 text-red-700",
  yellow: "bg-yellow-50 text-yellow-700",
  green: "bg-green-50 text-green-700",
  blue: "bg-blue-50 text-blue-700",
};
