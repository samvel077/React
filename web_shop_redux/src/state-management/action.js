import { ADD_CART, REDUCTION, INCREASE, GET_TOTAL, REMOVE_PRODUCT } from '../core/constant'

export const addCart = (payload, payload1) => ({
    type: ADD_CART,
    payload,
    price: payload1
})

export const reduction = (payload) => ({
    type: REDUCTION,
    payload
})

export const increase = (payload) => ({
    type: INCREASE,
    payload
})

// export const getTotal = (payload) => ({
//     type: GET_TOTAL,
//     payload
// })

export const removeProduct = (payload) => ({
    type: REMOVE_PRODUCT,
    payload
})