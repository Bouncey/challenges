import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import SidePanel from './components/SidePanel.jsx';

function Preview(props) {
  return (
    <div id='preview'>
      <Col md={6} xs={12}>
        <SidePanel {...props} />
      </Col>
      <Col md={6} xs={12}>
        <h3>Preview on iPhone?</h3>
      </Col>
    </div>
  );
}

Preview.displayName = 'Preview';

export default Preview;
