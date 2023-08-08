import { INLINES } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default options;
