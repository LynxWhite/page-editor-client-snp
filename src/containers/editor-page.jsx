import React, {Component} from 'react';
import '../resources/css/editor.css';

import EditorTools from '../components/editor/editor-tools.jsx';
import EditorPreview from '../components/preview/editor-preview.jsx';

import { connect } from 'react-redux';
import {clearPage, removePage, savePage} from '../actions/editorActions';
import {getPageData} from '../actions/homeActions';

class EditorPage extends Component {
    componentWillMount() {
        console.log('will mount component');
        console.log(this.props.match.params.id);
        this.props.getPageData(this.props.match.params.id);
    }

    saveThisPage = e => {
        const page = {
            header: this.props.header,
            content: this.props.content,
            footer: this.props.footer
        }
        this.props.savePage(page, this.props.match.params.id);
    }

    deleteThisPage = e => {
        this.props.removePage(this.props.match.params.id);
    }

    render(){
        return(
            <div className='editor-wrapper'>
                <div className='nav-header'>
                    <button className='editor-border editor-border__radius button' onClick={this.props.clearPage}>Clear</button>
                    <button className='editor-border editor-border__radius button' onClick={this.saveThisPage}>Save</button>
                    <button className='editor-border editor-border__radius button' onClick={this.deleteThisPage}>Delete</button>
                </div>
                <div className='editor-window'>
                    <EditorTools/>
                    <EditorPreview/>
                </div>
            </div>
        );
    }
};

export default connect(
    state => ({
        header: state.header,
        content: state.content,
        footer: state.footer
    })
    , {clearPage, getPageData, removePage, savePage})(EditorPage);