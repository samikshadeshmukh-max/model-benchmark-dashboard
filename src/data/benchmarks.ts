export type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
  source: string;
  sourceUrl: string;
};

export const benchmarks: Benchmark[] = [
  {
    model: "Llama 3.1 8B",
    mmlu: 75,
    gsm8k: 78,
    humanEval: 72,
    source: "Official model documentation",
    sourceUrl: "",
  },
  {
    model: "Mistral 7B",
    mmlu: 70,
    gsm8k: 75,
    humanEval: 68,
    source: "Official model documentation",
    sourceUrl: "",
  },
  {
    model: "Gemma 2 9B",
    mmlu: 72,
    gsm8k: 76,
    humanEval: 70,
    source: "Official model documentation",
    sourceUrl: "",
  },
];