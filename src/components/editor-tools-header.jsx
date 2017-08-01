import React, {Component} from 'react';
import {setDescription, setTitle} from '../actions/headerActions';
import { connect } from 'react-redux';

class EditorToolsHeader extends Component {
    onTitleChange = e => {
        this.props.setTitle(e.target.value);
    }

    onDescriptionChange = e => {
        this.props.setDescription(e.target.value);
    }

    render() {
        return (
            <ul>
                <li>
                    <input 
                        className='input-text' 
                        placeholder='title' 
                        type='text' 
                        value={this.props.title} 
                        onChange={this.onTitleChange} />
                </li>
                <li>
                    <input 
                        className='input-text' 
                        placeholder='description' 
                        type='text' 
                        value={this.props.description} 
                        onChange={this.onDescriptionChange} />
                </li>
            </ul>
        );
    }
}

export default connect(
    state => ({
        title: state.header.title,
        description: state.header.description
}),
{setTitle, setDescription}
)(EditorToolsHeader);