import React from 'react';
import '../resources/css/editor.css';

import EditorTools from '../components/editor/editor-tools.jsx';
import EditorPreview from '../components/preview/editor-preview.jsx';

import { connect } from 'react-redux';
import {clearPage} from '../actions/editorActions';

const EditorPage = (props) => (
    <div className='editor-wrapper'>
        <div className='nav-header'>
            <button className='editor-border editor-border__radius button' onClick={props.clearPage}>Clear</button>
            <button className='editor-border editor-border__radius button'>Save</button>
            <button className='editor-border editor-border__radius button'>Delete</button>
        </div>
        <div className='editor-window'>
            <EditorTools/>
            <EditorPreview/>
        </div>
    </div>
);

export default connect(null, {clearPage})(EditorPage);