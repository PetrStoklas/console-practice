import { applyMiddleware, createStore } from "redux"
import { sagaMiddleware } from "./sagas"

const initialState = {
    minutes: 55,
    hours: 0
}

// main reducer
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return ({ ...state, minutes: state.minutes + 1 })

        case "DECREMENT":
            return ({ ...state, minutes: state.minutes - 1 })

        case "INCREMENTTENS":
        case "DECREMENTTENS":
            const hours = Math.floor(state.minutes / 60)
            return ({ ...state, hours })

        default:
            return state

    }
}

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

export default store;