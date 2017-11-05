/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Preview from './views/Preview.jsx';

const propTypes = {
  'data.markdownRemark': PropTypes.object,
  challengeSeed: PropTypes.string,
  challengeType: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.string
};

const veiwTypes = {
  preview: Preview
};

function Show(props) {
  const {
    frontmatter: { title, challengeType = 'preview' }
  } = props.data.markdownRemark;
  const View = veiwTypes[challengeType];
  return (
    <div id='show'>
      <Helmet>
        <title>{`${title} | freeCodeCamp Challenges`}</title>
      </Helmet>
      <View {...props.data.markdownRemark} />
    </div>
  );
}

Show.displayName = 'Show';
Show.propTypes = propTypes;

export default Show;

export const query = graphql`
  query challengeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        challengeType
        challengeSeed {
          html
        }
      }
    }
  }
`;
