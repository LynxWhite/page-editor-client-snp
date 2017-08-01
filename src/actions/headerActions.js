import {SET_TITLE, SET_DESCRIPTION} from '../constants/ActionTypes';

export function setTitle(title) {
    return ({type: SET_TITLE, payload: title});
}

export function setDescription(description) {
    return ({type: SET_DESCRIPTION, payload: description});
}