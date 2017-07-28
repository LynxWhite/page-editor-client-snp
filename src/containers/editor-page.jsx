import React from 'react';
import SiteWrapper from '../components/site-wrapper.jsx';
import EditorTools from '../components/editor-tools.jsx';

const EditorPage = () => (
    <div> 
        <div className={'editor'}>
            <EditorTools/>
            <SiteWrapper/> 
        </div>
    </div>
);

export default EditorPage;