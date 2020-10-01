import { createStore } from "redux"

const initialState = {
    counter: 0
}

// main reducer
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return ({ ...state, counter: state.counter + 1 })

        default:
            return state

    }
}

const store = createStore(reducer)

export default store;