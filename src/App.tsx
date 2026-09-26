import { useState } from "react";
import BenchmarkTable from "./components/BenchmarkTable";
import BenchmarkChart from "./components/BenchmarkChart";
import ModelSelector from "./components/ModelSelector";
import { benchmarks } from "./data/benchmarks";
import "./App.css";

function App() {
  const [selectedModels, setSelectedModels] = useState(
    benchmarks.map((item) => item.model)
  );

  const filteredBenchmarks = benchmarks.filter((item) =>
    selectedModels.includes(item.model)
  );

  const totalModels = benchmarks.length;
  const totalBenchmarks = 3;

  const averageScore =
    filteredBenchmarks.length > 0
      ? filteredBenchmarks.reduce(
          (total, item) =>
            total + item.mmlu + item.gsm8k + item.humanEval,
          0
        ) /
        (filteredBenchmarks.length * totalBenchmarks)
      : 0;

  const bestModel =
    filteredBenchmarks.length > 0
      ? filteredBenchmarks.reduce((best, current) => {
          const bestScore =
            best.mmlu + best.gsm8k + best.humanEval;

          const currentScore =
            current.mmlu + current.gsm8k + current.humanEval;

          return currentScore > bestScore ? current : best;
        })
      : null;

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div>
          <p className="eyebrow">AI MODEL ANALYTICS</p>

          <h1>Model Benchmark Dashboard</h1>

          <p className="subtitle">
            Compare open-weight AI models across standard benchmark scores.
          </p>
        </div>
      </header>

      <main className="dashboard-content">

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <span className="stat-label">Total Models</span>

            <strong>{totalModels}</strong>

            <span className="stat-description">
              Models in dataset
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Benchmarks</span>

            <strong>{totalBenchmarks}</strong>

            <span className="stat-description">
              MMLU, GSM8K & HumanEval
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Top Model</span>

            <strong className="model-name">
              {bestModel?.model ?? "—"}
            </strong>

            <span className="stat-description">
              Highest combined score
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Average Score</span>

            <strong>
              {filteredBenchmarks.length > 0
                ? `${averageScore.toFixed(1)}%`
                : "—"}
            </strong>

            <span className="stat-description">
              Across selected models
            </span>
          </div>

        </section>

        {/* Model Selection */}
        <section className="dashboard-card">

          <div className="section-heading">
            <div>
              <p className="section-label">COMPARE</p>

            
            </div>

            <span className="selection-count">
              {selectedModels.length} selected
            </span>
          </div>

          <ModelSelector
            models={benchmarks.map((item) => item.model)}
            selectedModels={selectedModels}
            onChange={setSelectedModels}
          />

        </section>

        {/* Chart and Table */}
        {filteredBenchmarks.length > 0 ? (
          <>
            {/* Benchmark Chart */}
            <section className="dashboard-card">

              <div className="section-heading">
                <div>
                  <p className="section-label">PERFORMANCE</p>

                  <h2>Benchmark Comparison</h2>
                </div>
              </div>

              <div className="chart-container">
                <BenchmarkChart
                  benchmarks={filteredBenchmarks}
                />
              </div>

            </section>

            {/* Benchmark Table */}
            <section className="dashboard-card">

              <div className="section-heading">
                <div>
                  <p className="section-label">DATA</p>

                  <h2>Benchmark Scores</h2>
                </div>
              </div>

              <BenchmarkTable
                benchmarks={filteredBenchmarks}
              />

            </section>
          </>
        ) : (
          /* Empty State */
          <section className="dashboard-card empty-state">

            <h2>No models selected</h2>

            <p>
              Select at least one model above to view benchmark
              scores and comparison.
            </p>

          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="footer">
        Model Benchmark Dashboard • Built with React + TypeScript
      </footer>
    </div>
  );
}

export default App;