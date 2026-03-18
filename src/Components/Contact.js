import React from 'react';

const Contact = (props) => {
  var email   = props.data ? props.data.email   : '';
  var city    = props.data ? props.data.address.city  : '';
  var state   = props.data ? props.data.address.state : '';
  var message = props.data ? props.data.contactmessage : '';

  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className='ten columns'>
          <p className='lead'>{message}</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          <form action='' method='post' id='contactForm' name='contactForm'>
            <fieldset>
              <div>
                <label htmlFor='contactName'>Name <span className='required'>*</span></label>
                <input type='text' defaultValue='' id='contactName' name='contactName' />
              </div>
              <div>
                <label htmlFor='contactEmail'>Email <span className='required'>*</span></label>
                <input type='text' defaultValue='' id='contactEmail' name='contactEmail' />
              </div>
              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input type='text' defaultValue='' id='contactSubject' name='contactSubject' />
              </div>
              <div>
                <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
                <textarea rows='10' id='contactMessage' name='contactMessage'></textarea>
              </div>
              <div>
                <button className='submit'>Send Message</button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </fieldset>
          </form>
          <div id='message-warning'>Something went wrong. Please try again.</div>
          <div id='message-success'>
            <i className='fa fa-check'></i> Your message was sent — thank you!
          </div>
        </div>

        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact contact-card'>
            <p className='contact-card-name'>Hao Guo</p>
            <p className='contact-card-title'>AI Engineer</p>
            <p className='contact-card-avail'>Available for remote roles.</p>
            <ul className='contact-card-links'>
              <li>
                <a href={`mailto:${email}`}>
                  <i className='fas fa-envelope'></i> {email}
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/hao-guo-918690126/' target='_blank' rel='noreferrer'>
                  <i className='fab fa-linkedin'></i> LinkedIn
                </a>
              </li>
              <li>
                <a href='https://howardguoui.github.io/howardreactmainpage/images/Hao_Guo_Resume.pdf' target='_blank' rel='noreferrer'>
                  <i className='fas fa-file-pdf'></i> Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
