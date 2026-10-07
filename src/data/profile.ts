// Everything the site says lives here. Edit this file to update the page.

export const profile = {
  name: 'Howard Guo',
  role: 'AI engineer: LLM applications and inference',
  intro:
    'Vice President and software engineer at Bank of America with 9+ years building ' +
    'data-heavy applications. I lead AI-driven diagnostics at work, and build and measure ' +
    'generative AI systems end to end: RAG with measured evaluations, open models served ' +
    'and benchmarked on my own GPU, and agent tooling over MCP. M.S. in Mathematics.',
  location: 'Jersey City, NJ',
  status: 'Open to AI engineer, ML engineer, and MLOps roles',
  email: 'howardguoui@gmail.com',
  photo: 'images/profilepic.jpg',
  // PDF in public/; set to undefined to hide the Resume buttons.
  resume: 'Hao_Guo_Resume.pdf' as string | undefined,
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
      'cross-encoder reranking, and a RAGAS evaluation: 97% faithfulness, 84% hit rate@6.',
    stack: ['Python', 'FastAPI', 'PostgreSQL + pgvector', 'RAGAS', 'Claude API', 'Docker'],
    live: 'https://howardguoui.github.io/filings-rag/',
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
    title: 'Vice President, Software Engineer',
    org: 'Bank of America',
    dates: 'Oct 2020 – Present',
    detail:
      'Lead AI-driven diagnostics and remediation for enterprise device enrollment ' +
      'services, cutting weekly manual investigation by 25%, with AI-powered ticket triage ' +
      'and automatic Jira creation. Also real-time market data dashboards for a Global ' +
      'Banking & Markets trading platform in React and TypeScript.',
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
    title: 'Software Engineer',
    org: 'BNY Mellon',
    dates: 'Jan 2020 – Oct 2020',
    detail: 'React and Java features and Adobe Experience Manager (AEM 6.5) content workflows for BNYmellon.com and Pershing.com.',
  },
  {
    title: 'Software Engineer, GBAM Risk Strategy',
    org: 'Bank of America',
    dates: 'Oct 2018 – Jan 2020',
    detail:
      'Reporting applications for risk executives\' credit reporting, Python Flask services on ' +
      'Quartz, the bank\'s cross-asset pricing and risk platform, and regulatory and ' +
      'trade-metrics reporting for 300+ internal users.',
  },
  {
    title: 'Software Engineer',
    org: 'ADP',
    dates: 'Jan 2017 – Sep 2018',
    detail: 'Migrated the Global Cloud Connect data-integration application from AngularJS 1.5 to Angular 6 and TypeScript.',
  },
  {
    title: 'M.S. Mathematics (Computer Science concentration)',
    org: 'North Carolina Central University',
    dates: 'Graduated Dec 2018',
    detail:
      'Algorithms, data structures, big data systems, and computer vision. Research ' +
      'assistant on scholarship, and teaching assistant.',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Data visualization', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'FastAPI'] },
  { group: 'AI & LLM', items: ['RAG', 'LLM evaluation (RAGAS)', 'Embeddings', 'MCP', 'Claude API', 'Prompt engineering'] },
  { group: 'LLM serving', items: ['vLLM', 'llama.cpp', 'Ollama', 'CUDA', 'Prometheus metrics'] },
  { group: 'Data', items: ['PostgreSQL + pgvector', 'SQL & NoSQL', 'pandas & NumPy'] },
  { group: 'Tooling', items: ['Git', 'Docker', 'CI/CD'] },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'What roles are you looking for?',
    a: 'AI engineer, ML engineer, or MLOps roles: building LLM applications, retrieval and evaluation, and serving models in production. My full-stack background means I can ship the whole system, not just the model call.',
  },
  {
    q: 'What did you build at Bank of America?',
    a: 'I lead AI-driven diagnostics and remediation for enterprise device enrollment services, working with engineering and product teams on AI-powered issue triage. I have also built real-time market data dashboards for Global Banking & Markets and, earlier, Python services on the bank\'s pricing and risk platform.',
  },
  {
    q: 'How much LLM experience do you have?',
    a: 'At work I lead AI-driven diagnostics and remediation for device enrollment. Outside work, Filings RAG is a public example of retrieval and evaluation (pgvector hybrid search, reranking, RAGAS), and Local Inference Lab of serving open models with vLLM and llama.cpp on my own GPU. Both are on GitHub with tests and CI.',
  },
]
