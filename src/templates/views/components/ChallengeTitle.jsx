import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string
};

export default function ChallengeTitle({ title }) {
  return (
    <h4 className={'text-center'}>
      {title || 'Happy Coding!'}
      <hr />
    </h4>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';
ChallengeTitle.propTypes = propTypes;
