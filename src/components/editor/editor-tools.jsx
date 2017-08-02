import React, {Component} from 'react';
import EditorToolsHeader from './editor-tools-header.jsx';
import EditorToolsFooter from './editor-tools-footer.jsx';
import EditorToolsContent from './editor-tools-content.jsx';

class EditorTools extends Component {
    render() {
        return (
            <div className='editor-tools'>
                <EditorToolsHeader/>
                <EditorToolsContent/>
                <EditorToolsFooter/>
            </div>
        );
    }
}

export default EditorTools;