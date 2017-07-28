import {ADD_TEXT_INPUT, SET_TEXT, ADD_LIST, ADD_IMAGE} from '../constants/ActionTypes';

const initialState = [

];

const text_field = {
    type: 'text',
    value: ''
};

const list_field = {
    type: 'list',
    value: []
};

const image_field = {
    type: 'img',
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
            new_state[action.id] = Object.assign({}, new_state[action.id], {value: action.text});
            return new_state;
        default:
            return state;
    }
}