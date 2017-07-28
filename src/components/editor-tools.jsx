import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setTitle, setDescription} from '../actions/editorActions';
import EditorContent from './editor-content.jsx';
import EditorFooter from './editor-footer.jsx';

class EditorTools extends Component {
    onTitleChange(event) {
        const new_value = event.target.value;
        this.props.setTitle(new_value);
    }

    onDescrChange(event) {
        const new_value = event.target.value;
        this.props.setDescription(new_value);
    }

    render() {
        const {data, setTitle, setDescription } = this.props;
        return (
            <div className={'editor-tools'}>
                <div className='tools-list'>
                    <input value={this.props.data.title} onChange={this.onTitleChange.bind(this)} />
                    <input value={this.props.data.description} onChange={this.onDescrChange.bind(this)} />
                    <EditorContent/>
                    <EditorFooter/>
                </div>
            </div>
        );
    } 
}

EditorTools.PropTypes = {
    data: PropTypes.object.isRequired,
    setTitle: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired
};

export default connect(
    state => ({
        data: state.items
    }),
    {setTitle, setDescription}
)(EditorTools);