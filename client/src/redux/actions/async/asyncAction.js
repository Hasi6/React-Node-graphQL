import {
    ASYNC_ACTION_START,
    ASYNC_ACTION_FINISHED,
    ASYNC_ACTION_ERROR,
    TEST_REDUX_SAGA,
    TEST_SAGA
} from "../../Types"
import axios from "axios"
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'

export const asyncActionStart = (name) => {
    return {
        type: ASYNC_ACTION_START,
        payload: name
    }
}
export const asyncActionFinished = () => {
    return {
        type: ASYNC_ACTION_FINISHED
    }
}
export const asyncActionError = () => {
    return {
        type: ASYNC_ACTION_ERROR
    }
}


export const getApiData = () => {
    return {
        type: TEST_SAGA
    }
}


export const api = async() => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}

export function* getData(action) {
    const datas = yield call(api)
    console.log(datas)
    yield put({
        type: TEST_REDUX_SAGA,
        payload: {
            datas
        }
    })
}

export function* sagaConnect() {
    yield takeLatest(TEST_SAGA, getData)
}