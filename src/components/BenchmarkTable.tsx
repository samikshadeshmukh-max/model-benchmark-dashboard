type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
};

type BenchmarkTableProps = {
  benchmarks: Benchmark[];
};

function BenchmarkTable({ benchmarks }: BenchmarkTableProps) {
  return (
    <div>
      <h2>Benchmark Scores</h2>

      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>MMLU</th>
            <th>GSM8K</th>
            <th>HumanEval</th>
          </tr>
        </thead>

        <tbody>
          {benchmarks.map((item) => (
            <tr key={item.model}>
              <td>{item.model}</td>
              <td>{item.mmlu}</td>
              <td>{item.gsm8k}</td>
              <td>{item.humanEval}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BenchmarkTable;