import {SET_TITLE, SET_DESCRIPTION} from '../constants/ActionTypes';

const initialState = {
    title: 'Превью страницы',
    description: ''
};

export default function items(state = initialState, action) {
    const new_state = Object.assign({}, state);
    switch (action.type) {
        case SET_TITLE:
            new_state.title = action.payload;
            return new_state;
        case SET_DESCRIPTION:
            new_state.description = action.payload;
            return new_state;
        default:
            return state;
    }
}