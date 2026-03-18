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
          <div className='widget widget_contact'>
            <h4>Direct Contact</h4>
            <p className='address'>
              <span>Howard Guo</span><br />
              <span>{city}, {state}</span><br />
              <span>{email}</span>
            </p>
          </div>

          <div className='widget widget_tweets'>
            <h4 className='widget-title'>Currently Building</h4>
            <ul id='twitter'>
              <li>
                <span>
                  Building <strong>LLM-powered tools</strong> with LangChain, RAG pipelines, and Claude API.
                </span>
              </li>
              <li>
                <span>
                  Deep-diving into <strong>Apache Spark</strong> and distributed data pipeline architecture.
                </span>
              </li>
              <li>
                <span>
                  Open to opportunities in <strong>Full Stack, LLM Engineering, or Big Data</strong>.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
