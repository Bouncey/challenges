const React = require('react');
const styleSheets = require('./stylesheets');

const preloads = styleSheets.map((styleSheet, i) => (
  <link
    as='style'
    href={styleSheet.props.href}
    key={'preload-' + i}
    rel='preload'
  />
));

module.exports = preloads;
