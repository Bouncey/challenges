import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Nav from '../layoutComponets/Nav.jsx';

function Layout({ children }) {
  return (
    <div>
      <Grid id='layout'>
        <Row>
          <Col xs={12}>
            <Nav />
          </Col>
        </Row>
      </Grid>
      <Grid>
        <div id='children'>{children()}</div>
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
