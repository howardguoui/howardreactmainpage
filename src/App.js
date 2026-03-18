import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
  const [resumeData] = useState({
    main: {
      name: 'Howard Guo',
      roles: ['Senior UI Developer', 'AI Engineer', 'Indie Game Dev'],
      bio: 'Senior UI Developer at Bank of America building enterprise-grade trading interfaces for GBAM. AI enthusiast crafting LLM-powered tools, Claude agents, and RAG pipelines. Also an indie game developer — building Pixel Fury in Unreal Engine 5.',
      contactmessage:
        "Open to new opportunities at the intersection of frontend and AI. Whether it's trading dashboards, LLM products, or something entirely new — let's build it.",
      email: 'howardguoui@gmail.com',
      image: 'profilepic.jpg',
      address: {
        city: 'Jersey City',
        state: 'NJ',
      },
      resumedownload:
        'https://howardguoui.github.io/howardreactmainpage/images/Hao_Guo_Resume.pdf',
      social: [
        {
          name: 'email',
          url: 'mailto:howardguoui@gmail.com',
          className: 'fas fa-envelope',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/hao-guo-918690126/',
          className: 'fab fa-linkedin',
        },
        {
          name: 'github',
          url: 'https://github.com/howardguoui',
          className: 'fab fa-github',
        },
      ],
    },
    resume: {
      skillmessage:
        'Technologies I build with — from enterprise UI to AI pipelines and game engines.',
      education: [
        {
          school: 'North Carolina Central University',
          degree: 'M.S. Mathematics',
          graduated: 'December 2018',
          description:
            'Focus on algorithms, data structures, big data, and computer vision. Teaching Assistant and scholarship recipient.',
        },
      ],
      work: [
        {
          company: 'Bank of America',
          title: 'Senior UI Developer',
          years: 'October 2020 – Present',
          description:
            'Building enterprise UI components and data visualization tools for GBAM (Global Banking & Markets) using React, TypeScript, and the internal Quartz framework. Delivering high-performance interfaces used by traders and analysts globally.',
        },
        {
          company: 'AI / Open Source Projects',
          title: 'Indie AI Developer',
          years: '2024 – Present',
          description:
            'Building AI-powered tools with Claude API, LangChain, and RAG pipelines. Created Agent Office (real-time Claude Code visualizer), PromptVault Chrome Extension (AI prompt manager for Claude, ChatGPT, Gemini & Grok), and a full LLM tutorial hub.',
        },
        {
          company: 'Pixel Fury Studio',
          title: 'Indie Game Developer',
          years: '2023 – Present',
          description:
            "Solo-developing Pixel Fury — a 2D beat'em up built in Unreal Engine 5 using Paper2D, GAS (Gameplay Ability System), and Steam multiplayer. Responsible for design, art, and all engineering.",
        },
      ],
      skills: [
        { name: 'React',              level: '92%' },
        { name: 'TypeScript',         level: '88%' },
        { name: 'CSS / Sass',         level: '90%' },
        { name: 'Vue / Angular',      level: '75%' },
        { name: 'Python',             level: '72%' },
        { name: 'Claude API / LLM',   level: '82%' },
        { name: 'LangChain / RAG',    level: '68%' },
        { name: 'Prompt Engineering', level: '85%' },
        { name: 'Unreal Engine 5',    level: '60%' },
        { name: 'Git / CI/CD',        level: '92%' },
      ],
    },
    portfolio: {
      projects: [
        {
          title: 'PromptVault',
          category:
            'Chrome Extension — free AI prompt manager for Claude, ChatGPT, Gemini, Grok & Perplexity',
          image: 'promptvault.png',
          url: 'https://github.com/howardguoui/promptvault-chrome-extension',
          tags: ['JavaScript', 'Chrome Extension', 'AI Tools'],
        },
        {
          title: 'Agent Office',
          category:
            'Real-time visualization dashboard for Claude Code agents and multi-agent sessions',
          image: 'agent-office.png',
          url: 'https://github.com/howardguoui/agent-office',
          tags: ['HTML', 'Claude API', 'Real-time', 'OSS'],
        },
        {
          title: 'LLM Tutorial Hub',
          category:
            'Interactive step-by-step guide to large language models with live examples',
          image: 'llm-tutorial.png',
          url: 'https://github.com/howardguoui/large-language-model-hub',
          tags: ['TypeScript', 'LLM', 'Education'],
        },
        {
          title: 'Algo Visualizer',
          category:
            'Interactive algorithm & data structure visualization built with React + TypeScript',
          image: 'algo-visualizer.png',
          url: 'https://github.com/howardguoui/algo-visualizer',
          tags: ['TypeScript', 'React', 'Algorithms'],
        },
        {
          title: 'Screenshotdle',
          category: 'Daily puzzle game — guess the video game from a single screenshot',
          image: 'Capture.PNG',
          url: 'https://howardguoui.github.io/screenshotdle/',
          tags: ['HTML', 'JavaScript', 'Game'],
        },
        {
          title: 'Pixel Fury',
          category:
            "2D beat'em up indie game with GAS, Paper2D, and Steam multiplayer in Unreal Engine 5",
          image: 'canadian-wanderlust.jpg',
          url: 'https://howardguoui.github.io/pixelfury-dle/',
          tags: ['Unreal Engine 5', 'C++', 'Game Dev'],
        },
      ],
    },
    testimonials: {
      testimonials: [
        {
          text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          user: 'Martin Fowler',
        },
        {
          text: 'The most important property of a program is whether it accomplishes the intention of its user.',
          user: 'C.A.R. Hoare',
        },
      ],
    },
  });

  return (
    <div className='App'>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
