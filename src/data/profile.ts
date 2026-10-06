// Everything the site says lives here. Edit this file to update the page.

export const profile = {
  name: 'Howard Guo',
  role: 'AI/ML engineer: retrieval, evaluation, and LLM serving',
  intro:
    '9+ years building Python services and React applications in finance, including ' +
    'Bank of America. I now build AI systems end to end: hybrid-search RAG with ' +
    'measured evaluations, open models served and benchmarked on my own GPU, and ' +
    'agent tooling over MCP. M.S. in Mathematics.',
  location: 'Jersey City, NJ',
  status: 'Open to AI engineer, ML engineer, and MLOps roles',
  email: 'howardguoui@gmail.com',
  photo: 'images/profilepic.jpg',
  resume: 'images/Hao_Guo_Resume.pdf',
  links: {
    github: 'https://github.com/howardguoui',
    linkedin: 'https://www.linkedin.com/in/hao-guo-918690126/',
  },
}

export interface Project {
  name: string
  summary: string
  stack: string[]
  live?: string
  code?: string
  /** Shown instead of links when the code is private. */
  note?: string
}

export const projects: Project[] = [
  {
    name: 'Filings RAG',
    summary:
      'Ask questions about SEC 10-K filings and get answers cited to the exact section. ' +
      'Hybrid pgvector and full-text search fused with Reciprocal Rank Fusion, ' +
      'cross-encoder reranking, and an evaluation suite with retrieval metrics and RAGAS.',
    stack: ['Python', 'FastAPI', 'PostgreSQL + pgvector', 'RAGAS', 'Claude API', 'Docker'],
    code: 'https://github.com/howardguoui/filings-rag',
  },
  {
    name: 'Local Inference Lab',
    summary:
      'Serving open LLMs on one 16 GB GPU: plans KV cache and layer offload before ' +
      'launch, benchmarks vLLM, llama.cpp, and Ollama under load with GPU telemetry, ' +
      'and exposes it all to agents through an MCP server.',
    stack: ['vLLM', 'llama.cpp', 'CUDA', 'Prometheus', 'FastMCP', 'Docker'],
    code: 'https://github.com/howardguoui/local-inference-lab',
  },
  {
    name: 'Agent Office',
    summary:
      'Watch Claude Code agents work in real time. Hook events stream over a ' +
      'WebSocket into an animated office, with a sidebar of running and finished tasks.',
    stack: ['Node.js', 'WebSocket', 'MCP', 'Claude Code hooks'],
    live: 'https://howardguoui.github.io/agent-office/',
    code: 'https://github.com/howardguoui/agent-office',
  },
  {
    name: 'AI Video Factory',
    summary:
      'Translates and dubs videos on one local GPU: speech recognition, LLM ' +
      'translation, and voice-cloned narration, queued through Celery, with a ' +
      'quality benchmark on Google FLEURS.',
    stack: ['FastAPI', 'Celery', 'faster-whisper', 'Qwen3-TTS', 'FFmpeg', 'Next.js'],
    code: 'https://github.com/howardguoui/AI-video-factory',
  },
  {
    name: 'Learning Hub',
    summary:
      'One app for algorithms, machine learning, and LLMs: 200+ bilingual lessons, ' +
      'step-through visualizers, a SQL sandbox, and a lesson-a-day rotation.',
    stack: ['React 19', 'TypeScript', 'Vite', 'sql.js'],
    note: 'Private repo. Happy to walk through it.',
  },
]

export interface Role {
  title: string
  org: string
  dates: string
  detail: string
}

export const experience: Role[] = [
  {
    title: 'Software Engineer, Full Stack',
    org: 'Bank of America',
    dates: 'Oct 2020 – present',
    detail:
      'Data visualization and analytics platforms for Global Banking & Markets, used ' +
      'by traders and analysts worldwide. Real-time market dashboards in React, ' +
      'TypeScript, Node.js, REST APIs, and the internal Quartz framework.',
  },
  {
    title: 'LLM & AI developer',
    org: 'Independent projects',
    dates: '2024 – present',
    detail:
      'Filings RAG, Local Inference Lab, AI Video Factory, and Agent Office: RAG ' +
      'with pgvector and RAGAS evaluation, vLLM and llama.cpp serving, MCP servers, ' +
      'and the Claude API.',
  },
  {
    title: 'Big data engineering',
    org: 'Independent study',
    dates: '2025 – present',
    detail:
      'Apache Spark (batch and streaming), distributed systems design, data pipeline ' +
      'architecture, and cloud data platforms.',
  },
  {
    title: 'M.S. Mathematics',
    org: 'North Carolina Central University',
    dates: 'Graduated Dec 2018',
    detail:
      'Algorithms, data structures, big data systems, and computer vision. Teaching ' +
      'assistant and scholarship recipient.',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Data visualization', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'FastAPI'] },
  { group: 'AI & LLM', items: ['RAG', 'pgvector', 'RAGAS evaluation', 'MCP', 'Claude API', 'LangChain', 'Prompt engineering'] },
  { group: 'LLM serving', items: ['vLLM', 'llama.cpp', 'Ollama', 'CUDA', 'Prometheus metrics'] },
  { group: 'Data', items: ['SQL & NoSQL', 'pandas & NumPy', 'Apache Spark (learning)'] },
  { group: 'Tooling', items: ['Git', 'Docker', 'CI/CD'] },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'What roles are you looking for?',
    a: 'AI engineer, ML engineer, or MLOps roles: building LLM applications, retrieval and evaluation, and serving models in production. My full-stack background means I can ship the whole system, not just the model call.',
  },
  {
    q: 'What did you build at Bank of America?',
    a: 'Data visualization and analytics platforms for Global Banking & Markets: high-performance dashboards over real-time market data, used by traders and analysts worldwide.',
  },
  {
    q: 'How much LLM experience do you have?',
    a: 'Filings RAG is a public example of retrieval and evaluation (pgvector hybrid search, reranking, RAGAS), and Local Inference Lab of serving open models with vLLM and llama.cpp on my own GPU. Both are on GitHub with tests and CI.',
  },
  {
    q: 'Where are you with big data?',
    a: 'I am learning Apache Spark, distributed data processing, and pipeline architecture. My M.S. in Mathematics (algorithms, statistics, computer vision) gives me a strong theoretical base for it.',
  },
]
