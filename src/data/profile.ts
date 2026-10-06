// Everything the site says lives here. Edit this file to update the page.

export const profile = {
  name: 'Howard Guo',
  role: 'Full-stack engineer building data platforms and LLM tools',
  intro:
    '5+ years building data-intensive platforms at Bank of America, now moving ' +
    'into full-stack, LLM, and big data engineering. My M.S. in Mathematics gives ' +
    'me strong analytical foundations, from distributed pipelines to RAG applications.',
  location: 'Jersey City, NJ',
  status: 'Open to full-stack, LLM engineering, and data engineering roles',
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
      'translation, voice-cloned narration, and subtitle or MP3 export.',
    stack: ['Next.js', 'FastAPI', 'faster-whisper', 'Qwen3-TTS', 'FFmpeg'],
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
      'Agent Office, AI Video Factory, and a bilingual learning hub. Python, ' +
      'LangChain, RAG, vector databases, MCP, and the Claude API.',
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
  { group: 'AI & LLM', items: ['Claude API', 'LangChain', 'RAG', 'Vector databases', 'MCP', 'Prompt engineering'] },
  { group: 'Data', items: ['SQL & NoSQL', 'pandas & NumPy', 'Apache Spark (learning)'] },
  { group: 'Tooling', items: ['Git', 'Docker', 'CI/CD'] },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'What roles are you looking for?',
    a: 'Full-stack engineering, LLM/AI engineering, or data engineering. I do my best work where data, algorithms, and a good user experience meet.',
  },
  {
    q: 'What did you build at Bank of America?',
    a: 'Data visualization and analytics platforms for Global Banking & Markets: high-performance dashboards over real-time market data, used by traders and analysts worldwide.',
  },
  {
    q: 'How much LLM experience do you have?',
    a: 'I build LLM applications with LangChain, RAG pipelines, vector databases, MCP, and the Claude API. Agent Office and AI Video Factory are public examples.',
  },
  {
    q: 'Where are you with big data?',
    a: 'I am learning Apache Spark, distributed data processing, and pipeline architecture. My M.S. in Mathematics (algorithms, statistics, computer vision) gives me a strong theoretical base for it.',
  },
]
