import React from 'react';
import '../../resources/css/dropdown.css';

const DropDownButton = (props) => (
    <div className={'dropdown is-hoverable'}>
        <div className='dropdown-trigger'>
            <button className='add-item-button'>+</button>
        </div>
        <div className={'dropdown-menu'}>
            {props.children}
        </div>
    </div>
);

export default DropDownButton;
