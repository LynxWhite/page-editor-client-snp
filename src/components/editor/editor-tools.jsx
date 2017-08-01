import React, {Component} from 'react';
import EditorToolsHeader from './editor-tools-header.jsx';
import EditorToolsFooter from './editor-tools-footer.jsx';

class EditorTools extends Component {
    render() {
        return (
            <div className='editor-tools'>
                <EditorToolsHeader/>
                <div className='editor-content'>
                    <div className='tools-content'>
                        <ul>
                            <li>
                                <input type="text" placeholder='Text' />
                            </li>
                            <li>
                                <input type="file"/>
                            </li>
                            <li>
                                <textarea rows='4' placeholder='text1' />
                            </li>
                        </ul>
                    </div>
                    <div className='tools-right-block'>
                        <button className='add-item-button'>+</button>
                    </div>
                </div>
                <EditorToolsFooter/>
                </div>
        );
    }
}

export default EditorTools;