import React, {Component} from 'react';
import {addText, setText, addList, setList, addImage, setImage, swapItems} from '../../actions/contentActions';
import { connect } from 'react-redux';
import DropDownButton from '../common/DropdownButton.jsx';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <div className='edit-tools-item'> {value}</div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className='edit-tools-container'>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class EditorToolsContent extends Component {
    _handleImageChange = (e, i) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.props.setImage(i, reader.result);
        }

        reader.readAsDataURL(file);
    }

    getItems() {
        let tools = [];
        for(let i=0; i<this.props.tools.length; i++){
            if (this.props.tools[i].type === 'text'){
                tools.push(<input type='text' value={this.props.tools[i].value} onChange={(e)=>(this.props.setText(i, e.target.value))} />);
            }
            if (this.props.tools[i].type === 'list'){
                tools.push(<textarea rows='4' placeholder='text1' value={this.props.tools[i].value} onChange={(e)=>(this.props.setList(i, e.target.value))} />);
            }
            if (this.props.tools[i].type === 'image'){
                tools.push(<input type='file' onChange={(e)=>(this._handleImageChange(e, i))} />);
            }
        }
        return tools;
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.swapItems(oldIndex, newIndex);
    };

    render() {
        const tools = this.getItems();
        return (
                <div className='editor-content'>
                    <div className='tools-content'>
                        <SortableList items={tools} onSortEnd={this.onSortEnd} />
                    </div>
                    <div className='tools-right-block'>
                    <DropDownButton>
                        <div className={'dropdown-content'}>
                            <div className={'dropdown-item'} onClick={this.props.addText}> Текст </div>
                            <div className={'dropdown-item'} onClick={this.props.addImage}> Изображение </div>
                            <div className={'dropdown-item'} onClick={this.props.addList} > Список </div>
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
{addText, setText, addList, setList, addImage, setImage, swapItems}
)(EditorToolsContent);