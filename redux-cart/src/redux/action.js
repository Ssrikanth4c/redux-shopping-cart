import {ADD_TO_CART,ADD_TO_ORDER} from "./actionType";

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