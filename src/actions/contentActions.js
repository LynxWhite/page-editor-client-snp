import {ADD_TEXT_INPUT, SET_TEXT, ADD_LIST, ADD_IMAGE, SET_LIST, SET_IMAGE} from '../constants/ActionTypes';

export function addText(){
    return {type: ADD_TEXT_INPUT};
}

export function setText(id, text){
    return {type:SET_TEXT, id:id, text:text}
}

export function addList() {
    return {type: ADD_LIST}
}

export function setList(id, text){
    return {type:SET_LIST, id:id, text:text}
}

export function addImage() {
    return {type: ADD_IMAGE}
}

export function setImage(id, text){
    return {type:SET_IMAGE, id:id, text:text}
}