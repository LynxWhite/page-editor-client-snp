import {ADD_TEXT_INPUT, SET_TEXT, ADD_LIST, ADD_IMAGE, SET_LIST, SET_IMAGE} from '../constants/ActionTypes';

export function addText(){
    return {type: ADD_TEXT_INPUT};
}

export function setText(id, text){
    return {type:SET_TEXT, id:id, text:text}
}