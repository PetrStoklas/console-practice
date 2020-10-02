import { all, put, takeLatest } from 'redux-saga/effects'
import { INCREMENT, DECREMENT } from "./actions"
import createSagaMiddleware from 'redux-saga'

import { decrementTens, incrementTens } from "./actions"
export const sagaMiddleware = createSagaMiddleware()

const delay = (ms = 3000) => new Promise((res) => setTimeout(res, ms))

function* incrementTensAsync() {
    yield delay()
    yield put(incrementTens())
}

function* decrementTensAsync() {
    yield delay()
    yield put(decrementTens())
}

function* watchIncrement() {
    yield takeLatest(INCREMENT, incrementTensAsync)
}

function* watchDecrement() {
    yield takeLatest(DECREMENT, decrementTensAsync)
}


export default function* rootSaga() {
    yield all([watchIncrement(), watchDecrement()])
}