import React, {Component} from 'react';
import {setDescription, setTitle} from '../../actions/headerActions';
import { connect } from 'react-redux';

class EditorToolsHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
    }

    onTitleChange = e => {
        this.setState({title:e.target.value})
    }

    onDescriptionChange = e => {
        this.setState({description:e.target.value})
    }

    onTitle = e => {
        this.props.setTitle(e.target.value);
    }

    onDescription = e => {
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
                        value={this.state.title} 
                        onChange={this.onTitleChange}
                        onBlur = {this.onTitle}    
                    />
                </li>
                <li>
                    <input 
                        className='input-text' 
                        placeholder='description' 
                        type='text' 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                        onBlur = {this.onDescription}   
                    />
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