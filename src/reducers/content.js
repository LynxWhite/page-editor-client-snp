import {ADD_TEXT_INPUT, SET_TEXT, ADD_LIST, ADD_IMAGE, SET_LIST, SET_IMAGE, SWAP_ITEMS, CLEAR_PAGE} from '../constants/ActionTypes';
import {arrayMove} from 'react-sortable-hoc';

const initialState = [

];

const text_field = {
    type: 'text',
    value: ''
};

const list_field = {
    type: 'list',
    value: ''
};

const image_field = {
    type: 'image',
    value: ''
};

export default function content(state = initialState, action) {
    const new_state = Object.assign([], state);
    switch (action.type) {
        case ADD_TEXT_INPUT:
            return [...state, text_field];
        case ADD_LIST:
            return [...state, list_field];
        case ADD_IMAGE:
            return [...state, image_field];
        case SET_TEXT:
            new_state[action.id] = {type:'text', value:action.text}
            return new_state;
        case SET_LIST:
            new_state[action.id] = {type:'list', value:action.text};
            return new_state;
        case SET_IMAGE:
            new_state[action.id] = {type:'image', value:action.text};;
            return new_state;
        case SWAP_ITEMS:
            return arrayMove(new_state, action.oldIndex, action.newIndex);
        case CLEAR_PAGE:
            return initialState;
        default:
            return state;
    }
}