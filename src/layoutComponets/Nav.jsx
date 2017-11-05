import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function FCCNav() {
  return (
    <Nav bsStyle='pills'>
      <NavItem href='#'>NavItem 1 content</NavItem>
      <NavItem title='Item'>NavItem 2 content</NavItem>
      <NavItem disabled={true}>NavItem 3 content</NavItem>
    </Nav>
  );
}

FCCNav.displayName = 'FCCNav';

export default FCCNav;
