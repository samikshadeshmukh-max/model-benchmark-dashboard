export type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
  source: string;
};

export const benchmarks: Benchmark[] = [
  {
    model: "Llama 3.1 8B",
    mmlu: 0,
    gsm8k: 0,
    humanEval: 0,
    source: "",
  },
  {
    model: "Mistral 7B",
    mmlu: 0,
    gsm8k: 0,
    humanEval: 0,
    source: "",
  },
  {
    model: "Gemma 2 9B",
    mmlu: 0,
    gsm8k: 0,
    humanEval: 0,
    source: "",
  },
];