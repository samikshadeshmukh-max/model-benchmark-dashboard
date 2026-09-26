type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
  source: string;
  sourceUrl: string;
};

type BenchmarkTableProps = {
  benchmarks: Benchmark[];
};

function BenchmarkTable({ benchmarks }: BenchmarkTableProps) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>MMLU</th>
            <th>GSM8K</th>
            <th>HumanEval</th>
            <th>Average</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          {benchmarks.map((item) => {
            const average =
              (item.mmlu + item.gsm8k + item.humanEval) / 3;

            return (
              <tr key={item.model}>
                <td>{item.model}</td>
                <td>{item.mmlu}</td>
                <td>{item.gsm8k}</td>
                <td>{item.humanEval}</td>
                <td>{average.toFixed(1)}</td>

                <td>
                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source ↗
                    </a>
                  ) : (
                    item.source
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BenchmarkTable;