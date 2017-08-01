import React, {Component} from 'react';

import PreviewHeader from './preview-header.jsx';
import PreviewFooter from './preview-footer.jsx';

class EditorPreview extends Component {
    render() {
        return (
            <div className='editor-display'>
                    <PreviewHeader/>
                    <section>
                        <p> Какой-то текст </p>
                        <ul>
                            <li> список </li>
                        </ul>
                    </section>
                    <PreviewFooter/>
                </div>
        );
    }
}

export default EditorPreview;