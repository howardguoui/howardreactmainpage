import React from 'react';

const Header = (props) => {
  var networks = null;

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
  }

  var tagline   = props.data ? props.data.tagline : '';
  var resume    = props.data ? props.data.resumedownload : '#';
  var isDark    = props.theme === 'dark';

  return (
    <header id='home'>
      {/* Nav */}
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
        <a className='mobile-btn' href='#home'    title='Hide navigation'>Hide navigation</a>

        <ul id='nav' className='nav'>
          <li className='current'><a className='smoothscroll' href='#home'>Home</a></li>
          <li><a className='smoothscroll' href='#about'>About</a></li>
          <li><a className='smoothscroll' href='#resume'>Resume</a></li>
          <li><a className='smoothscroll' href='#portfolio'>Projects</a></li>
          <li><a className='smoothscroll' href='#contact'>Contact</a></li>
        </ul>

        {/* Light / Dark toggle */}
        <button
          className='theme-toggle'
          onClick={props.toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
      </nav>

      {/* Decorative background blobs */}
      <div className='hero-bg'></div>

      {/* Hero content */}
      <div className='row banner'>
        <div className='banner-text'>

          {/* Status chip */}
          <div className='hero-greeting'>
            <span className='hero-dot'></span>
            Open to Opportunities
          </div>

          {/* Name */}
          <h1 className='responsive-headline'>
            Hi, I&apos;m{' '}
            <span className='name-accent'>Howard</span>
          </h1>

          {/* Tagline */}
          <p className='hero-tagline'>{tagline}</p>

          {/* CTA buttons */}
          <div className='hero-ctas'>
            <a className='btn-primary smoothscroll' href='#portfolio'>
              <i className='fas fa-rocket'></i> View Projects
            </a>
            <a className='btn-outline' href={resume} target='_blank' rel='noreferrer'>
              <i className='fas fa-file-alt'></i> Resume
            </a>
          </div>

          {/* Social icons */}
          <ul className='social'>{networks}</ul>
        </div>
      </div>

      {/* Scroll arrow */}
      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
