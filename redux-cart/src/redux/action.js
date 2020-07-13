import {ADD_TO_CART,ADD_TO_ORDER, USER_VALIDATION, ADD_PRODUCTS, INCREMENT, DECREMENT} from "./actionType";

export const addToCart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload:payload
    }
}

export const addToOrders=(payload)=>{
    return{
        type:ADD_TO_ORDER,
        payload:payload
    }
}

export const addProducts=(payload)=>{
    return{
        type: ADD_PRODUCTS,
        payload
    }
}
export const increment=(payload)=>{
    return{
        type: INCREMENT,
        payload
    }
}
export const decrement=(payload)=>{
    return{
        type: DECREMENT,
        payload
    }
}

export const userValidation=payload=>{
    return{
        type:USER_VALIDATION,
        payload
    }
}