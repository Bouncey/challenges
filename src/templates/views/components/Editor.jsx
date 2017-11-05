import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
// Because react-codemirror forgot it?
CodeMirror.displayName = 'CodeMirror';

const propTypes = {
  mode: PropTypes.string.isRequired,
  seed: PropTypes.string
};

class Editor extends PureComponent {
  constructor(props) {
    super(props);

    this.envProps = typeof window !== 'undefined' ? Object.keys(window) : [];
    console.log(this.props.mode);
    this.codeMode = this.props.mode === 'html' ? 'htmlmixed' : this.props.mode;
    this.options = {
      lint: {
        esversion: 6,
        predef: this.envProps
      },
      lineNumbers: true,
      mode: this.codeMode,
      runnable: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      scrollbarStyle: 'null',
      lineWrapping: true,
      gutters: ['CodeMirror-lint-markers'],
      theme: 'monokai'
    };
  }
  render() {
    const { seed } = this.props;
    return (
      <NoSSR>
        <CodeMirror options={this.options} value={seed} />
      </NoSSR>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = propTypes;

export default Editor;
