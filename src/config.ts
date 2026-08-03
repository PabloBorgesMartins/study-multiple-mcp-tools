export type ModelConfig = {
  apiKey: string;
  httpReferer: string;
  xTitle: string;

  provider: {
    sort: {
      by: string;
      partition: string;
    };
  };

  models: string[];
  temperature: number;
  maxTokens: number;
};

console.assert(process.env.OPENROUTER_API_KEY, 'OPENROUTER_API_KEY is not set in environment variables');

export const config: ModelConfig = {
  apiKey: process.env.OPENROUTER_API_KEY!,
  httpReferer: '',
  xTitle: 'IA Devs - Transforming Services into Tools',
  models: [
    // 'arcee-ai/trinity-large-preview:free',
    // 'nvidia/llama-nemotron-rerank-vl-1b-v2:free'
    // 'inclusionai/ling-3.0-flash:free'

    // 'poolside/laguna-s-2.1:free'
    'cohere/north-mini-code:free'
  ],
  provider: {
    sort: {
      by: 'throughput', // Route to model with highest throughput (fastest response)
      partition: 'none',
    },
  },
  temperature: 0.7,
  maxTokens: 2048,
};
