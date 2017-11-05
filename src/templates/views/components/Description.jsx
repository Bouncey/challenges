import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired
};

function Description(props) {
  const { content } = props;
  return (
    <div
      className='description'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

Description.displayName = 'Description';
Description.propTypes = propTypes;

export default Description;
