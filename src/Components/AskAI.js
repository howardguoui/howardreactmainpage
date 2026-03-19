import React, { useState, useEffect, useRef } from 'react';

/* ── Knowledge base ─────────────────────────────────────────────── */
const RESPONSES = [
  {
    keywords: ['skill', 'tech', 'stack', 'language', 'know', 'use', 'proficient'],
    answer:
      "Howard's core stack: Python, Node.js, React, TypeScript, LangChain, and SQL/NoSQL databases. He's actively deepening expertise in Big Data (Apache Spark, distributed pipelines) and LLM engineering (RAG, vector databases, Claude API).",
  },
  {
    keywords: ['experience', 'work', 'job', 'career', 'bank', 'bofa', 'company', 'background'],
    answer:
      'Howard has 5+ years at Bank of America building data-heavy trading and analytics platforms for GBAM (Global Banking & Markets) using React, TypeScript, and REST APIs. Outside of work he has built open-source AI tools like Agent Office and PromptVault.',
  },
  {
    keywords: ['project', 'built', 'created', 'made', 'portfolio', 'show', 'demo'],
    answer:
      "Key projects: PromptVault (AI prompt manager Chrome extension), Agent Office (real-time Claude Code agent dashboard), LLM Tutorial Hub (TypeScript), and Algo Visualizer (algorithm visualization in React). All open source on GitHub!",
  },
  {
    keywords: ['available', 'hire', 'contact', 'opportunity', 'open', 'position', 'role', 'looking', 'seeking'],
    answer:
      "Yes! Howard is actively seeking opportunities in Full Stack Development, LLM Engineering, and Big Data Engineering. Best way to reach him: howardguoui@gmail.com or LinkedIn at linkedin.com/in/hao-guo-918690126.",
  },
  {
    keywords: ['llm', 'large language', 'language model', 'langchain', 'rag', 'retrieval', 'vector', 'embedding', 'claude', 'gpt', 'openai', 'generative'],
    answer:
      "Howard builds LLM-powered applications using LangChain, RAG pipelines, vector databases, and the Claude API. He built Agent Office (real-time multi-agent visualization) and PromptVault, and is deep in the LLM engineering space.",
  },
  {
    keywords: ['big data', 'spark', 'hadoop', 'distributed', 'pipeline', 'data engineering', 'etl', 'warehouse'],
    answer:
      "Howard is actively learning Big Data engineering — Apache Spark, distributed data processing, and pipeline architecture. His M.S. in Mathematics (algorithms, statistics, computer vision) gives him strong theoretical grounding for this transition.",
  },
  {
    keywords: ['fullstack', 'full stack', 'full-stack', 'backend', 'server', 'node', 'api', 'rest', 'database'],
    answer:
      "Howard builds full-stack applications: React/TypeScript frontends, Node.js/Python backends, PostgreSQL and MongoDB databases. He's focused on data-intensive full-stack systems and LLM-powered applications.",
  },
  {
    keywords: ['python', 'numpy', 'pandas', 'scikit', 'jupyter'],
    answer:
      "Python is Howard's go-to for backend work and AI/ML tasks — he uses it for LangChain pipelines, data processing with Pandas/NumPy, and building automation scripts. His M.S. background means he's comfortable with the math under the hood.",
  },
  {
    keywords: ['education', 'degree', 'university', 'school', 'study', 'math', 'graduate'],
    answer:
      "Howard holds an M.S. in Mathematics from North Carolina Central University (2018), focusing on algorithms, big data, and computer vision. He was a Teaching Assistant and scholarship recipient — strong analytical foundations for data/AI work.",
  },
  {
    keywords: ['game', 'gaming', 'pixel', 'fury', 'unreal', 'indie'],
    answer:
      "Fun fact — Howard also develops games! He's building Pixel Fury, a 2D beat'em up in Unreal Engine 5 with Paper2D, GAS (Gameplay Ability System), and Steam multiplayer. A side passion alongside the data and AI work.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'who', 'introduce', 'tell me about', 'about yourself'],
    answer:
      "Howard Guo is a software engineer transitioning from enterprise UI/full-stack work at Bank of America into LLM engineering and Big Data. He has an M.S. in Mathematics, 5+ years of industry experience, and a passion for building AI-powered tools.",
  },
  {
    keywords: ['transition', 'switching', 'change', 'moving', 'pivot', 'new direction'],
    answer:
      "Howard is pivoting from frontend-heavy work into Full Stack + LLM Engineering + Big Data. He's actively building projects in each area: LLM tutorial hub, RAG pipelines, and learning Apache Spark — backed by a strong math and CS foundation.",
  },
];

const FALLBACK =
  "Great question! Howard is the best person to answer that directly. Feel free to reach out via the Contact section or at howardguoui@gmail.com.";

const GREETING =
  "Hi! I'm Howard's AI assistant. Ask me anything about his skills, experience, or projects — or click a suggested question below.";

const QUICK_QUESTIONS = [
  "What are your skills?",
  "Tell me about your experience",
  "What projects have you built?",
  "Are you open to new roles?",
  "What's your AI/LLM background?",
  "Tell me about your Big Data journey",
];

let _nextId = 1;
const uid = () => _nextId++;

/* ── Component ───────────────────────────────────────────────────── */
const AskAI = () => {
  const initId = 0;
  const [messages, setMessages]       = useState([{ role: 'ai', text: GREETING, id: initId }]);
  const [input, setInput]             = useState('');
  const [typingId, setTypingId]       = useState(null);
  const [displayed, setDisplayed]     = useState({ [initId]: GREETING });
  const messagesRef                   = useRef(null);

  // Scroll INSIDE the chat box only — fires once per new message, not per character
  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  // Typewriter effect
  const typewrite = (id, fullText) => {
    setTypingId(id);
    let i = 0;
    setDisplayed(prev => ({ ...prev, [id]: '' }));
    const iv = setInterval(() => {
      i++;
      setDisplayed(prev => ({ ...prev, [id]: fullText.slice(0, i) }));
      if (i >= fullText.length) {
        clearInterval(iv);
        setTypingId(null);
      }
    }, 16);
  };

  const getAnswer = (text) => {
    const lower = text.toLowerCase();
    for (const r of RESPONSES) {
      if (r.keywords.some(k => lower.includes(k))) return r.answer;
    }
    return FALLBACK;
  };

  const sendMessage = (text) => {
    if (!text.trim() || typingId !== null) return;
    const userId = uid();
    const aiId   = uid();
    const answer = getAnswer(text);

    setMessages(prev => [
      ...prev,
      { role: 'user', text: text.trim(), id: userId },
      { role: 'ai',   text: answer,      id: aiId   },
    ]);
    setDisplayed(prev => ({ ...prev, [userId]: text.trim(), [aiId]: '' }));
    setTimeout(() => typewrite(aiId, answer), 250);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id='askai'>
      <div className='row'>
        <div className='twelve columns'>

          {/* Header */}
          <div className='askai-header'>
            <div className='askai-icon-wrap'>
              <i className='fas fa-robot'></i>
            </div>
            <div>
              <h2 className='askai-title'>Ask Howard&apos;s AI</h2>
              <p className='askai-sub'>
                Trained on Howard&apos;s background — ask about skills, projects, or availability
              </p>
            </div>
          </div>

          {/* Chat window */}
          <div className='askai-window'>

            {/* Messages */}
            <div className='askai-messages' ref={messagesRef}>
              {messages.map(msg => (
                <div key={msg.id} className={`askai-msg askai-msg--${msg.role}`}>
                  {msg.role === 'ai' && (
                    <span className='askai-avatar'>
                      <i className='fas fa-robot'></i>
                    </span>
                  )}
                  <div className='askai-bubble'>
                    {displayed[msg.id] || ''}
                    {typingId === msg.id && <span className='askai-cursor'>|</span>}
                  </div>
                  {msg.role === 'user' && (
                    <span className='askai-avatar askai-avatar--user'>
                      <i className='fas fa-user'></i>
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick-question chips */}
            <div className='askai-chips'>
              {QUICK_QUESTIONS.map(q => (
                <button
                  key={q}
                  className='askai-chip'
                  onClick={() => sendMessage(q)}
                  disabled={typingId !== null}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form className='askai-form' onSubmit={handleSubmit}>
              <input
                className='askai-input'
                type='text'
                placeholder='Ask me anything about Howard...'
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={typingId !== null}
              />
              <button
                className='askai-send'
                type='submit'
                disabled={typingId !== null || !input.trim()}
                aria-label='Send'
              >
                <i className='fas fa-paper-plane'></i>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAI;
