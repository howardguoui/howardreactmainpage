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
        'I love UI, also love react because of virtual dom, hook, hoc and so on',
      contactmessage: 'Always look for new oppurtunity(TODO Submit)',
      email: 'howardguoui@gmail.com',
      image: 'profilepic.jpg',
      phone: '919-600-1388',
      address: {
        street: '208 Cambridge Ave',
        city: 'Jersey City',
        state: 'NJ',
        zip: '07307',
      },
      resumedownload:
        'https://howardguoui.github.io/howardreactmainpage/images/Hao_Guo_Resume.pdf',
      social: [
        {
          name: 'google-plus',
          url: 'mailto:howardguoui@gmail.com?',
          className: 'fa fa-google-plus',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/hao-guo-918690126/',
          className: 'fa fa-linkedin',
        },
        {
          name: 'github',
          url: 'https://github.com/howardguoui',
          className: 'fa fa-github',
        },
      ],
    },
    resume: {
      skillmessage:
        'Here you can create a short write-up of your skills to show off to employers',
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
            'Quartz, Edge, GBAM',
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
          name: 'Vue',
          level: '60%',
        },
        {
          name: 'Angular',
          level: '80%',
        },
        {
          name: 'Python',
          level: '70%',
        },
        {
          name: 'Vue',
          level: '80%',
        },
        {
          name: 'Java',
          level: '50%',
        },
      ],
    },
    portfolio: {
      projects: [
        {
          title: 'React Burger',
          category: 'React Hook application',
          image: 'canadian-wanderlust.jpg',
          url: 'https://howardguoui.github.io/burgerproject/',
        },
        {
          title: 'React Refresh 2021',
          category: 'React Hook application',
          image: 'Capture.PNG',
          url: 'https://howardguoui.github.io/reactrefresh2021/',
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
