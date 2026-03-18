import React from 'react';

const Header = (props) => {
  var networks = null;
  var roles = null;

  if (props.data) {
    networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target='_blank' rel='noreferrer'>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    if (props.data.roles) {
      roles = props.data.roles.map(function (role, i) {
        return (
          <span key={role} className={`role role-${i + 1}`}>
            {role}
          </span>
        );
      });
    }
  }

  return (
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>Home</a>
          </li>
          <li>
            <a className='smoothscroll' href='#about'>About</a>
          </li>
          <li>
            <a className='smoothscroll' href='#resume'>Resume</a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>Projects</a>
          </li>
          <li>
            <a className='smoothscroll' href='#testimonials'>Quotes</a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <div className='status-badge'>
            <span className='status-dot'></span>
            Open to Opportunities
          </div>

          <h1 className='responsive-headline'>Howard Guo</h1>

          <div className='roles-wrapper'>
            {roles}
          </div>

          <hr />
          <ul className='social'>{networks}</ul>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
