import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_LOAD_DATA, TYPE_CATEGORIES, setDataActionCreator } from '../actions';
import axios from 'axios';

export default function* sagaSetup() {
    console.log("Saga middleware has been started.");
    yield '';//takeEvery(ACTION_LOAD_DATA, loadData);

}

// function* loadData(action) {
//     try {
//         console.log("saga load data");
//         let result = yield call(sendRequest);
//         yield put(setDataActionCreator(TYPE_CATEGORIES,result));
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// const sendRequest = () => {
//     try {
//         console.log("send request");
//         return axios.get("url")
//             .then(r => r.data.result)
//             .catch(e => e);

//     }
//     catch (e) {
//         return e;
//     }
// }