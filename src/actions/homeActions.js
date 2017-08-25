import {GET_PAGES, GET_PAGE_DETAILS_REQUEST} from '../constants/ActionTypes';

export function getPages(){
    return ({type:GET_PAGES})
}

export function getPageData(id) {
    return ({type: GET_PAGE_DETAILS_REQUEST, payload: id});
}