import React from 'react';

const Contact = (props) => {
  var email  = props.data ? props.data.email          : '';
  var resume = props.data ? props.data.resumedownload : '#';

  return (
    <section id='contact'>
      <div className='row'>
        <div className='twelve columns contact-hero'>

          {/* Badge */}
          <div className='contact-badge'>
            <span className='contact-dot'></span>
            Available for new roles
          </div>

          {/* Heading */}
          <h2 className='contact-heading'>Get In Touch</h2>
          <p className='contact-sub'>
            Open to Full Stack, LLM Engineering, and Big Data opportunities.<br />
            Reach out directly — I respond within 24&nbsp;hours.
          </p>

          {/* Contact cards */}
          <div className='contact-cards'>
            <a href={`mailto:${email}`} className='contact-card-big'>
              <i className='fas fa-envelope contact-card-icon'></i>
              <span className='contact-card-label'>Email</span>
              <span className='contact-card-value'>{email}</span>
            </a>

            <a
              href='https://www.linkedin.com/in/hao-guo-918690126/'
              className='contact-card-big'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin contact-card-icon'></i>
              <span className='contact-card-label'>LinkedIn</span>
              <span className='contact-card-value'>hao-guo-918690126</span>
            </a>

            <a
              href={resume}
              className='contact-card-big'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-file-pdf contact-card-icon'></i>
              <span className='contact-card-label'>Resume</span>
              <span className='contact-card-value'>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
