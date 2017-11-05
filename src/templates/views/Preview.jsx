import React from 'react';
import PropTypes from 'prop-types';

import SidePanel from './components/SidePanel.jsx';

const propTypes = {
  html: PropTypes.string
};

function Preview(props) {
  return (
    <div id='preview'>
      <SidePanel {...props} />
    </div>
  );
}

Preview.displayName = 'Preview';
Preview.propTypes = propTypes;

export default Preview;
