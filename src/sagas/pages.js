import { call, put, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes';
import * as Api from '../api/pages';

function* getPages(){
    try {
        const response = yield call(Api.getPages);
        yield put({type:ActionTypes.GET_PAGES_SUCCESS, payload:response});
    }
    catch (e) {
        yield put({type:ActionTypes.GET_PAGES_FAILED, message: e.message});
    }
}

function* getPageData(data){
    try {
        const response = yield call(Api.getPageData, data.payload);
        yield put({type:ActionTypes.GET_PAGE_DETAILS_SUCCESS, payload:response});
    } catch (e) {
        console.log('failed');
    }
}

function* loadPage(data) {
    const page = data.payload;
    yield put({type: ActionTypes.CLEAR_PAGE});
    yield put({type: ActionTypes.LOAD_HEADER, payload:page.header});
    yield put({type: ActionTypes.LOAD_CONTENT, payload:page.content});
    yield put({type: ActionTypes.LOAD_FOOTER, payload:page.footer});
}

function* savePage(data) {
    const page = data.page;
    const id = data.id;
    try {
        const response = yield call(Api.savePage, page, id);
        console.log(response);
    } catch (e) {
        console.log('failed');
    }
}

function* deletePage(data) {
    const id = data.id;
    try {
        console.log(data);
    } catch (e) {
        console.log('failed');
    }
}

export default function* root(){
    yield takeEvery(ActionTypes.GET_PAGES, getPages);
    yield takeEvery(ActionTypes.GET_PAGE_DETAILS_REQUEST, getPageData);
    yield takeEvery(ActionTypes.GET_PAGE_DETAILS_SUCCESS, loadPage);
    yield takeEvery(ActionTypes.SAVE_PAGE_REQUEST, savePage);
    yield takeEvery(ActionTypes.REMOVE_PAGE_REQUEST, deletePage);
}