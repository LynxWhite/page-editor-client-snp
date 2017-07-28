import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addTextToContent, setTextInInput, addList, addImage} from '../actions/editorActions';
import EditorTextInput from './editor-text-input.jsx';
import EditorImageInput from './editor-img-input.jsx';
import EditorListInput from './editor-list-input.jsx';

class EditorContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    onClickAdd() {
        this.setState({isVisible: !this.state.isVisible});
    }

    render() {
        const items = [];
        const { data } = this.props;
        for (let i = 0; i < data.length; i++) {
            switch (data[i].type) {
                case 'text':
                    items.push(
                        <EditorTextInput 
                            id={i} 
                            value={data[i].value} 
                            onChange={this.props.setTextInInput}
                        />
                    );
                    break;
                case 'list':
                    items.push(
                        <EditorListInput 
                            id={i} 
                            value={data[i].value} 
                            onChange={this.props.setTextInInput}
                        />
                    );
                    break;
                case 'img':
                    items.push(
                        <EditorImageInput 
                            id={i} 
                            value={data[i].value} 
                            onChange={this.props.setTextInInput}
                        />
                    );
                    break;
                default:
                    break;
            }
        }
        return (
            <div>
                Контент страницы
                <button onClick={this.onClickAdd.bind(this)}> Добавить блок </button>
                <ul style={{
                        'display': this.state.isVisible ? 'block' : 'none'
                    }}>
                    <li> <button onClick={this.props.addTextToContent}> Добавить текст </button> </li>
                    <li> <button onClick={this.props.addImage}> Добавить изображение </button> </li>
                    <li> <button onClick={this.props.addList}> Добавить список </button> </li>
                </ul>
                <ul>
                    {items.map((item, key)=>(
                        <li key={key}>
                            {item} 
                        </li>
                    ))}
                </ul>
            </div>
        );
    } 
}

EditorContent.PropTypes = {
    data: PropTypes.array,
    addTextToContent: PropTypes.func
};

export default connect(
    state => ({
        data: state.content
    }),
    {addTextToContent, setTextInInput, addList, addImage}
)(EditorContent);