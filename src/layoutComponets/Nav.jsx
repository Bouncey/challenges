import React from 'react';
import Link from 'gatsby-link';

import fCCLogo from '../img/freeCodeCamp.png';

import './styles/nav.scss';

const links = [
  {
    title: 'Map',
    href: '#'
  },
  {
    title: 'Community',
    href: '#'
  },
  {
    title: 'Donate',
    href: '#'
  }
];

const navLinks = links.map(link => (
  <li key={`${link.title}-${link.href}`}>
    <Link to={link.href}>{link.title}</Link>
  </li>
));

function FCCNav() {
  return (
    <nav>
      <Link to='#'>
        <img
          alt='freeCodeCamp, learn to code and help non-profits'
          height='100%'
          src={fCCLogo}
        />
      </Link>
      <ul className='nav nav-pills pull-right'>{navLinks}</ul>
    </nav>
  );
}

FCCNav.displayName = 'FCCNav';

export default FCCNav;
