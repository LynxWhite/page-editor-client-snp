import {SET_NAME, SET_EMAIL, SET_PHONE} from '../constants/ActionTypes';

export function setName(name) {
    return ({type:SET_NAME, payload:name})
}

export function setEmail(email) {
    return ({type:SET_EMAIL, payload:email})
}

export function setPhone(phone) {
    return ({type:SET_PHONE, payload:phone})
}