import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import Panel from 'react-bootstrap/lib/Panel';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import './styles/editor.scss';

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
    const { seed, mode } = this.props;
    return (
      <NoSSR>
        <Panel header={mode.toUpperCase()} id='editor'>
          <CodeMirror options={this.options} value={seed} />
        </Panel>
      </NoSSR>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = propTypes;

export default Editor;
