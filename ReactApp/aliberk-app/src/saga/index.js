import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, TYPE_CATEGORIES, setDataActionCreator } from '../actions';
import axios from 'axios';

export default function* sagaSetup() {
    console.log("Saga middleware has been started.");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        console.log("saga load data");
        let result = yield call(sendRequest);
        yield put(setDataActionCreator(TYPE_CATEGORIES,result));
    }
    catch (e) {
        console.log(e);
    }
}

const sendRequest = () => {
    try {
        console.log("send request");
        return axios.get('http://178.128.248.160:81/api/category', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODMzMjc5NzMsImV4cCI6MTU4MzMyODg3MywiaWF0IjoxNTgzMzI3OTczfQ.RqIlvEMLsZCn4Dxffk_n2A7m0xcidPl775N9izmSlko'
            }
        })
            .then(res => res.data)
            .catch(e => console.log(e));

    }
    catch (e) {
        return e;
    }
}