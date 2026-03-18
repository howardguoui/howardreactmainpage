import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import AskAI from './Components/AskAI';

const App = () => {
  // ─── Theme ───────────────────────────────────────────
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('hg-theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hg-theme', next);
  };

  // ─── Data ─────────────────────────────────────────────
  const [resumeData] = useState({
    main: {
      name: 'Howard Guo',
      tagline: 'Full Stack Developer · LLM Engineer · Big Data',
      bio: 'Software engineer with 5+ years building data-intensive platforms at Bank of America, now transitioning into Full Stack, LLM Engineering, and Big Data. M.S. in Mathematics — I bring strong analytical foundations to everything from distributed pipelines to RAG-powered applications.',
      contactmessage:
        "Open to roles in Full Stack Engineering, LLM/AI Engineering, or Big Data. I'm at my best when data, algorithms, and great user experience intersect. Let's talk.",
      email: 'howardguoui@gmail.com',
      image: 'profilepic.jpg',
      address: { city: 'Jersey City', state: 'NJ' },
      resumedownload:
        'https://howardguoui.github.io/howardreactmainpage/images/Hao_Guo_Resume.pdf',
      social: [
        { name: 'email',    url: 'mailto:howardguoui@gmail.com',                   className: 'fas fa-envelope' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/hao-guo-918690126/', className: 'fab fa-linkedin' },
        { name: 'github',   url: 'https://github.com/howardguoui',                className: 'fab fa-github'   },
      ],
    },
    resume: {
      skillmessage: 'A growing stack — from full-stack web to LLM pipelines and distributed data systems.',
      education: [
        {
          school: 'North Carolina Central University',
          degree: 'M.S. Mathematics',
          graduated: 'December 2018',
          description:
            'Coursework in algorithms, data structures, big data systems, and computer vision. Teaching Assistant and scholarship recipient. Strong theoretical foundation for data engineering and ML work.',
        },
      ],
      work: [
        {
          company: 'Bank of America',
          title: 'Software Engineer (Full Stack)',
          years: 'October 2020 – Present',
          description:
            'Built data visualization and analytics platforms for GBAM (Global Banking & Markets) — serving traders and analysts worldwide. Stack: React, TypeScript, Node.js, REST APIs, and the internal Quartz data framework. Delivered high-performance dashboards processing real-time market data.',
        },
        {
          company: 'AI / Open Source Projects',
          title: 'LLM & AI Developer',
          years: '2024 – Present',
          description:
            'Building LLM-powered tools: Agent Office (real-time multi-agent visualization for Claude Code), PromptVault (AI prompt manager Chrome extension supporting Claude, ChatGPT, Gemini & Grok), and a full-stack LLM Tutorial Hub. Stack: Python, LangChain, RAG, vector databases, Claude API.',
        },
        {
          company: 'Independent Study',
          title: 'Big Data Engineering',
          years: '2025 – Present',
          description:
            'Deep-diving into Big Data engineering: Apache Spark (batch & streaming), distributed systems design, data pipeline architecture, and cloud data platforms. Applying M.S. Math foundations to real-world data engineering problems.',
        },
      ],
      skills: [
        { name: 'Python',                  level: '80%' },
        { name: 'Node.js / REST APIs',     level: '82%' },
        { name: 'React / TypeScript',      level: '90%' },
        { name: 'SQL / NoSQL',             level: '75%' },
        { name: 'LangChain / RAG',         level: '72%' },
        { name: 'Claude API / LLM',        level: '85%' },
        { name: 'Apache Spark (Big Data)', level: '55%' },
        { name: 'Docker / CI/CD',          level: '70%' },
        { name: 'Prompt Engineering',      level: '87%' },
        { name: 'Git',                     level: '92%' },
      ],
    },
    portfolio: {
      projects: [
        {
          title: 'PromptVault',
          category:
            'Chrome Extension — free AI prompt manager for Claude, ChatGPT, Gemini, Grok & Perplexity',
          url: 'https://github.com/howardguoui/promptvault-chrome-extension',
          tags: ['JavaScript', 'Chrome Extension', 'AI Tools'],
        },
        {
          title: 'Agent Office',
          category:
            'Real-time visualization dashboard for Claude Code multi-agent sessions',
          url: 'https://github.com/howardguoui/agent-office',
          tags: ['HTML', 'Claude API', 'Real-time'],
        },
        {
          title: 'LLM Tutorial Hub',
          category:
            'Interactive step-by-step guide to large language models — transformers, RAG, fine-tuning',
          url: 'https://github.com/howardguoui/large-language-model-hub',
          tags: ['TypeScript', 'LLM', 'Full Stack'],
        },
        {
          title: 'Algo Visualizer',
          category:
            'Interactive algorithm & data structure visualization — sorting, graphs, trees',
          url: 'https://github.com/howardguoui/algo-visualizer',
          tags: ['TypeScript', 'React', 'Algorithms'],
        },
        {
          title: 'Screenshotdle',
          category: 'Daily puzzle game — guess the video game from a single screenshot',
          url: 'https://howardguoui.github.io/screenshotdle/',
          tags: ['HTML', 'JavaScript', 'Game'],
        },
        {
          title: 'Pixel Fury',
          category:
            "2D beat'em up indie game with GAS, Paper2D & Steam multiplayer in Unreal Engine 5",
          url: 'https://howardguoui.github.io/pixelfury-dle/',
          tags: ['Unreal Engine 5', 'C++', 'Game Dev'],
        },
      ],
    },
    testimonials: {
      testimonials: [
        {
          text: 'Without big data, you are blind and deaf and in the middle of a freeway.',
          user: 'Geoffrey Moore',
        },
        {
          text: 'The goal is to turn data into information, and information into insight.',
          user: 'Carly Fiorina',
        },
      ],
    },
  });

  return (
    <div className='App'>
      <Header data={resumeData.main} theme={theme} toggleTheme={toggleTheme} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <AskAI />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
