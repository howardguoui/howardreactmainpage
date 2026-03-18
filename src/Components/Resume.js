import React from 'react';

const Resume = (props) => {
  var skillmessage, education, work, skills;

  if (props.data) {
    skillmessage = props.data.skillmessage;

    education = props.data.education.map(function (edu) {
      return (
        <div key={edu.school}>
          <h3>{edu.school}</h3>
          <p className='info'>
            {edu.degree} <span>&bull;</span>{' '}
            <em className='date'>{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      );
    });

    work = props.data.work.map(function (job) {
      return (
        <div key={job.company}>
          <h3>{job.company}</h3>
          <p className='info'>
            {job.title} <span>&bull;</span>{' '}
            <em className='date'>{job.years}</em>
          </p>
          <p>{job.description}</p>
        </div>
      );
    });

    skills = props.data.skills.map(function (skill) {
      var cls = 'bar-expand ' + skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={cls}></span>
          <em>{skill.name}</em>
        </li>
      );
    });
  }

  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1><span>Education</span></h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>{education}</div>
          </div>
        </div>
      </div>

      <div className='row work'>
        <div className='three columns header-col'>
          <h1><span>Experience</span></h1>
        </div>
        <div className='nine columns main-col'>{work}</div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1><span>Skills</span></h1>
        </div>
        <div className='nine columns main-col'>
          <p>{skillmessage}</p>
          <div className='bars'>
            <ul className='skills'>{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
