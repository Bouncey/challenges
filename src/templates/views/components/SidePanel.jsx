import React from 'react';
import PropTypes from 'prop-types';

import ChallengeTitle from './ChallengeTitle.jsx';
import Description from './Description.jsx';
import Editor from './Editor.jsx';

const propTypes = {
  challengeSeed: PropTypes.arrayOf(PropTypes.object),
  frontmatter: PropTypes.object,
  html: PropTypes.string,
  title: PropTypes.string
};

function SidePanel(props) {
  const { html, frontmatter: { challengeSeed, title } } = props;
  const editors = Object.keys(challengeSeed)
    .filter(x => Array.isArray(challengeSeed[x]))
    .map(lang => (
      <Editor key={lang} mode={lang} seed={challengeSeed[lang].join('\n')} />
    ));
  return (
    <section id='side-panel'>
      <ChallengeTitle title={title} />
      <Description content={html} />
      {editors}
    </section>
  );
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default SidePanel;
