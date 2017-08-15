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

export default function* root(){
    yield takeEvery(ActionTypes.GET_PAGES, getPages);
}