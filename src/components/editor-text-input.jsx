import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {} from '../actions/editorActions';

class EditorTextInput extends Component {
    onChange(e) {
        this.props.onChange(this.props.id, e.target.value);
    }
    render() {
        return (
            <input value={this.props.value} onChange={this.onChange.bind(this)} placeholder={'text'} />
        );
    }
}

export default EditorTextInput;