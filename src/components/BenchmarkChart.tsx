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
    <ResponsiveContainer width="100%" height={380}>
      <BarChart
        data={benchmarks}
        margin={{
          top: 10,
          right: 20,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="model"
          tick={{ fontSize: 12 }}
        />

        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 12 }}
        />

        <Tooltip />

        <Legend />

        <Bar
          dataKey="mmlu"
          name="MMLU"
        />

        <Bar
          dataKey="gsm8k"
          name="GSM8K"
        />

        <Bar
          dataKey="humanEval"
          name="HumanEval"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BenchmarkChart;