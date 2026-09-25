import { useState } from "react";
import BenchmarkTable from "./components/BenchmarkTable";
import BenchmarkChart from "./components/BenchmarkChart";
import ModelSelector from "./components/ModelSelector";
import { benchmarks } from "./data/benchmarks";

function App() {
  const [selectedModels, setSelectedModels] = useState(
    benchmarks.map((item) => item.model)
  );

  const filteredBenchmarks = benchmarks.filter((item) =>
    selectedModels.includes(item.model)
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Model Benchmark Dashboard</h1>
        <p>
          Compare open-weight AI models across standard benchmark scores.
        </p>
      </header>

      <section className="card">
        <ModelSelector
          models={benchmarks.map((item) => item.model)}
          selectedModels={selectedModels}
          onChange={setSelectedModels}
        />
      </section>

      <section className="card">
        <BenchmarkTable benchmarks={filteredBenchmarks} />
      </section>

      <section className="card">
        <BenchmarkChart benchmarks={filteredBenchmarks} />
      </section>
    </div>
  );
}

export default App;