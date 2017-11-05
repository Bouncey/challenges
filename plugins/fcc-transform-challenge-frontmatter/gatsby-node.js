exports.onCreateNode = async function({ node }) {
  if (node.internal.type === 'MarkdownRemark') {
    node.frontmatter = {
      ...node.frontmatter,
      challengeSeed: {
        html: false,
        css: false,
        js: false,
        jsx: false,
        ...node.frontmatter.challengeSeed
      }
    };
  }
  return node;
};

