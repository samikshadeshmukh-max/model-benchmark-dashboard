import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
};

type BenchmarkChartProps = {
  benchmarks: Benchmark[];
};

function BenchmarkChart({ benchmarks }: BenchmarkChartProps) {
  return (
    <div className="chart-container">
      <h2>Benchmark Comparison</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={benchmarks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="model" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="mmlu" name="MMLU" />
          <Bar dataKey="gsm8k" name="GSM8K" />
          <Bar dataKey="humanEval" name="HumanEval" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BenchmarkChart;