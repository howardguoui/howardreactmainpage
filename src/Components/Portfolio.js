import React from 'react';

const Portfolio = (props) => {
  var projects = null;

  if (props.data) {
    projects = props.data.projects.map(function (project) {
      var tags = project.tags
        ? project.tags.map((tag) => (
            <span key={tag} className='project-tag'>
              {tag}
            </span>
          ))
        : null;

      return (
        <div key={project.title} className='portfolio-item'>
          <div className='item-wrap'>
            <a href={project.url} target='_blank' rel='noreferrer'>
              <div className='item-content'>
                <div className='item-header'>
                  <h5>{project.title}</h5>
                  <i className='fas fa-external-link-alt'></i>
                </div>
                <p className='item-desc'>{project.category}</p>
                <div className='item-tags'>{tags}</div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Projects &amp; Work</h1>
          <div id='portfolio-wrapper' className='portfolio-grid'>
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
