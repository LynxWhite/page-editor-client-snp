import {SET_TITLE, SET_DESCRIPTION, CLEAR_PAGE, LOAD_HEADER} from '../constants/ActionTypes';

const initialState = {
    title: '',
    description: ''
};

export default function header(state = initialState, action) {
    const new_state = Object.assign({}, state);
    switch (action.type) {
        case SET_TITLE:
            if (state.title === action.payload)
                return state;
            new_state.title = action.payload;
            return new_state;
        case SET_DESCRIPTION:
            if (state.description === action.payload)
                return state;
            new_state.description = action.payload;
            return new_state;
        case CLEAR_PAGE:
            return initialState;
        case LOAD_HEADER:
            return action.payload;
        default:
            return state;
    }
}