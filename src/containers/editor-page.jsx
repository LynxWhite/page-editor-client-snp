import React from 'react';
import '../resources/css/editor.css';

import EditorTools from '../components/editor-tools.jsx';
import EditorPreview from '../components/editor-preview.jsx';

const EditorPage = () => (
    <div className='editor-wrapper'>
        <div className='nav-header'>
            <button className='editor-border editor-border__radius button'>Clear</button>
            <button className='editor-border editor-border__radius button'>Save</button>
            <button className='editor-border editor-border__radius button'>Delete</button>
        </div>
        <div className='editor-window'>
            <EditorTools/>
            <EditorPreview/>
        </div>
    </div>
);

export default EditorPage;