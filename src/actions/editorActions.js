import {CLEAR_PAGE, SAVE_PAGE_REQUEST, REMOVE_PAGE_REQUEST} from '../constants/ActionTypes';

export function clearPage(){
    return {type: CLEAR_PAGE};
}

export function savePage(page, id){
    return {type: SAVE_PAGE_REQUEST, page: page, id:id};
}

export function removePage(id) {
    return {type: REMOVE_PAGE_REQUEST, id: id};
}
