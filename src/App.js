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
      bio:
        'Senior UI Developer at Bank of America with 5+ years of experience building enterprise-grade web applications. Passionate about React, TypeScript, and crafting smooth, accessible user interfaces. Also an indie game developer — currently building Pixel Fury, a 2D beat\'em up in Unreal Engine 5.',
      contactmessage: 'Open to new opportunities and interesting collaborations. Feel free to reach out!',
      email: 'howardguoui@gmail.com',
      image: 'profilepic.jpg',
      phone: '919-600-1388',
      address: {
        street: '264 Riverwalk way',
        city: 'Clifton',
        state: 'NJ',
        zip: '07014',
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
        'Technologies I work with daily — from frontend frameworks to tooling and beyond.',
      education: [
        {
          school: 'North Carolina Central University',
          degree: 'Masters in Science(Mathmatics)',
          graduated: 'December 2018',
          description:
            'Activities and Societies: Algorithm, data structure, big data, computer vision, Scholarship and Teaching Assistant position',
        },
      ],
      work: [
        {
          company: 'Bank of America',
          title: 'Web UI Developer',
          years: 'October 2020 - Present',
          description:
            'Building enterprise UI components and data visualization tools for GBAM (Global Banking & Markets) using React, TypeScript, and the internal Quartz framework. Delivering high-performance interfaces used by traders and analysts globally.',
        },
      ],
      skills: [
        {
          name: 'Git',
          level: '90%',
        },

        {
          name: 'React',
          level: '90%',
        },
        {
          name: 'CSS',
          level: '90%',
        },
        {
          name: 'HTML5',
          level: '90%',
        },
        {
          name: 'TypeScript',
          level: '85%',
        },
        {
          name: 'Vue',
          level: '70%',
        },
        {
          name: 'Angular',
          level: '75%',
        },
        {
          name: 'Python',
          level: '70%',
        },
        {
          name: 'Unreal Engine',
          level: '55%',
        },
      ],
    },
    portfolio: {
      projects: [
        {
          title: 'Screenshotdle',
          category: 'Daily puzzle — guess the game from a screenshot',
          image: 'Capture.PNG',
          url: 'https://howardguoui.github.io/screenshotdle/',
        },
        {
          title: 'Pixel Fury-dle',
          category: 'Daily puzzle — guess the fighter from pixel art',
          image: 'canadian-wanderlust.jpg',
          url: 'https://howardguoui.github.io/pixelfury-dle/',
        },
        {
          title: 'React Burger',
          category: 'React Hook application',
          image: 'canadian-wanderlust.jpg',
          url: 'https://howardguoui.github.io/burgerproject/',
        },
        {
          title: 'React Refresh 2022',
          category: 'React Hook application',
          image: 'Capture.PNG',
          url: 'https://howardguoui.github.io/reactrefresh2022/',
        },
      ],
    },
    testimonials: {
      testimonials: [
        {
          text:
            'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          user: 'Martin Fowler',
        },
        {
          text: 'First, solve the problem. Then, write the code',
          user: 'John Johnson',
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
