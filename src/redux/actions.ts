export const INCREMENT = "INCREMENT"
export const INCREMENTTENS = "INCREMENTTENS"
export const DECREMENT = "DECREMENT"
export const DECREMENTTENS = "DECREMENTTENS"

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const incrementTens = () => ({
    type: INCREMENTTENS
})

export const decrementTens = () => ({
    type: DECREMENTTENS
})