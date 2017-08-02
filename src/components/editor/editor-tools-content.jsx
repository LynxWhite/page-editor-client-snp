import React, {Component} from 'react';
import {addText, setText} from '../../actions/contentActions';
import { connect } from 'react-redux';
import DropDownButton from '../common/DropdownButton.jsx';

class EditorToolsContent extends Component {
    render() {
        let tools = [];
        for(let i=0; i<this.props.tools.length; i++){
            if (this.props.tools[i].type === 'text'){
                tools.push(<input type='text' value={this.props.tools[i].value} onChange={(e)=>(this.props.setText(i, e.target.value))} />);
            }
        }

        return (
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
                            {tools.map((tool, key) => (
                                <li key={'tool_'+key}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='tools-right-block'>
                    <DropDownButton>
                        <div className={'dropdown-content'}>
                            <div className={'dropdown-item'} onClick={this.props.addText}> Текст </div>
                            <div className={'dropdown-item'}> Изображение </div>
                            <div className={'dropdown-item'}> Список </div>
                        </div>
                    </DropDownButton>
                    </div>
                </div>
        );
    }
}

export default connect(
    state => ({
        tools: state.content
}),
{addText, setText}
)(EditorToolsContent);