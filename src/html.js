import React from 'react';
import PropTypes from 'prop-types';

import preloads from './head/preloads';
import metaAndStyleSheets from './head';

const propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.array,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.array,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array
};

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

function HTML(props) {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        dangerouslySetInnerHTML={{ __html: stylesStr }}
        id='gatsby-inlined-css'
      />
    );
  }
  return (
    <html lang='en' {...props.htmlAttributes}>
      <head>
        {preloads}
        {props.headComponents}
        <title>freeCodeCamp Challenges</title>
        {metaAndStyleSheets}
        {css}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          dangerouslySetInnerHTML={{ __html: props.body }}
          id='___gatsby'
          key={'body'}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.displayName = 'HTML';
HTML.propTypes = propTypes;

module.exports = HTML;
