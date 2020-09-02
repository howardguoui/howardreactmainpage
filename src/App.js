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
          company: 'Awesome Design Studio',
          title: 'Senior UX God ',
          years: 'March 2010 - Present',
          description:
            'The objective is to provide latest market information regarding advertise, campaign, marketing, stock and business analysis for corporate site such as BNYMellon.com, Pershing.com, microsite and so on',
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
          name: 'VueJs',
          level: '50%',
        },
        {
          name: 'Angular',
          level: '80%',
        },
        {
          name: 'Python',
          level: '50%',
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
      ],
    },
    testimonials: {
      testimonials: [
        {
          text:
            'Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.',
          user: 'Kareem Abdul Jabbar',
        },
        {
          text:
            "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
          user: 'Steve Wozniak... impersonator',
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
