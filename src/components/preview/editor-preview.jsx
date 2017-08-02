import React, {Component} from 'react';

import PreviewHeader from './preview-header.jsx';
import PreviewFooter from './preview-footer.jsx';
import PreviewContent from './preview-content.jsx';

class EditorPreview extends Component {
    render() {
        return (
            <div className='editor-display'>
                    <PreviewHeader/>
                    <PreviewContent/>
                    <PreviewFooter/>
                </div>
        );
    }
}

export default EditorPreview;