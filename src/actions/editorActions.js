import {SET_TITLE, SET_DESCRIPTION, ADD_TEXT_INPUT, 
    SET_TEXT, ADD_LIST, ADD_IMAGE} from '../constants/ActionTypes';

export function setTitle(title) {
    return ({type: SET_TITLE, payload: title});
}

export function setDescription(descr) {
    return ({type: SET_DESCRIPTION, payload: descr});
}

export function addTextToContent() {
    return ({type: ADD_TEXT_INPUT});
}

export function addList() {
    return ({type: ADD_LIST});
}

export function addImage() {
    return ({type: ADD_IMAGE});
}

export function setTextInInput(id, text) {
    return ({type: SET_TEXT, id: id, text: text});
}