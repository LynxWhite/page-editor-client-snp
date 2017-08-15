import {GET_PAGES_SUCCESS} from '../constants/ActionTypes'

const initialState = [

];

export default function pages(state = initialState, action) {
    switch (action.type) {
        case GET_PAGES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}