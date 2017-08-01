import {SET_NAME, SET_EMAIL, SET_PHONE} from '../constants/ActionTypes';

const initialState = {
    name: '',
    email: '',
    phone: ''
};

export default function footer(state = initialState, action) {
    let new_state;
    switch (action.type) {
        case SET_NAME:
            new_state = Object.assign({}, state);
            new_state.name = action.payload;
            return new_state;
        case SET_EMAIL:
            new_state = Object.assign({}, state);
            new_state.email = action.payload;
            return new_state;
        case SET_PHONE:
            new_state = Object.assign({}, state);
            new_state.phone = action.payload;
            return new_state;
        default:
            return state;
    }
}