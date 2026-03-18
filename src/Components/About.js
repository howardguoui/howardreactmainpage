import React from 'react';

const About = (props) => {
  var name, profilepic, bio, city, state, email, resumeDownload;

  if (props.data) {
    name = props.data.name;
    profilepic = 'images/' + props.data.image;
    bio = props.data.bio;
    city = props.data.address.city;
    state = props.data.address.state;
    email = props.data.email;
    resumeDownload = props.data.resumedownload;
  }

  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src={profilepic}
            alt={`${name} Profile`}
          />
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact</h2>
              <p className='address'>
                <span>{name}</span>
                <br />
                <span>{city}, {state}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a
                  href={resumeDownload}
                  className='button'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fas fa-download'></i>Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
