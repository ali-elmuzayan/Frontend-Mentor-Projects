import ResultsBody from "./components/ResultsBody.jsx";
import ResultsHeader from "./components/ResultsHeader.jsx";
import summaries from "./data/summaries.js";

function App() {
  const avgScore = 65;
  const score = Math.round(
    summaries.reduce((acc, curr) => acc + curr.score, 0) / summaries.length
  );
  return (
    <main className="min-h-screen bg-gray-100 sm:flex sm:items-center sm:justify-center ">
      <div className="h-min-screen sm:max-w-xl mx-auto bg-white sm:flex sm:rounded-3xl  shadow-lg overflow-hidden">
        <ResultsHeader avgScore={avgScore} score={score} />
        <ResultsBody summaries={summaries} />
      </div>
    </main>
  );
}

export default App;
