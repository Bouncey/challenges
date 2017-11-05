import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description.jsx';
import Editor from './Editor.jsx';

const propTypes = {
  challengeSeed: PropTypes.arrayOf(PropTypes.object),
  frontmatter: PropTypes.object,
  html: PropTypes.string
};

function SidePanel(props) {
  const { html, frontmatter: { challengeSeed } } = props;
  return (
    <section id='side-panel'>
      <Description content={html} />
      {Object.keys(challengeSeed)
        .filter(x => !!x)
        .map(lang => (
          <Editor
            key={lang}
            mode={lang}
            seed={challengeSeed[lang].join('\n')}
          />
        ))}
    </section>
  );
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default SidePanel;
