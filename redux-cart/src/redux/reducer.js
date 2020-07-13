import {ADD_TO_CART,ADD_TO_ORDER, ADD_PRODUCTS,USER_VALIDATION, INCREMENT, DECREMENT} from "./actionType";
import data from "../data.json";
const initState={
    data:data,
    categories:[],
    cartArray:[],
    orderArray:[],
    isAuth:false,
    userDetails:[
        {
            username:'sree',
            password:'sree'
        },
        {
            username: 'srikanth',
            password:'srikanth'
        }
    ],
    loginUser:''
}
const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_TO_CART:{
            let item =state.data.find(item => item.id === payload)
            let arr=[...state.cartArray]
            let duplicate=false
            
            for(let i=0; i< state.cartArray.length; i++){
                if(arr[i].id == payload){
                    arr[i].qty++
                    duplicate=true
                    break
                }
            }
            if(!duplicate){
                arr=[...arr, {...item, qty:1}];
            }
            return{
                ...state,
                cartArray:arr
            }
        }

        case ADD_TO_ORDER:{
            return{
                ...state,
                orderArray:[...state.orderArray,payload]
            }
        }
        case ADD_PRODUCTS:{
            return{
                ...state,
                data: [...state.data, payload]
            }
        }
        case INCREMENT:{
            console.log(state.cartArray)
            let increItem=state.cartArray.map(item=>item.id==payload?{...item, qty:item.qty+1}:item)
            console.log('incre')
            console.log(increItem)
            return{
                ...state,
                cartArray: increItem

            }
        }
        case DECREMENT:{
            let decreItem= state.cartArray.map(item=>item.id === payload?{...item, qty:item.qty-1}:item)
            decreItem= decreItem.filter(item=>!item.qty<=0)
            return{
                ...state,
                cartArray:decreItem
                
            }
        }

        case USER_VALIDATION:{
            let flag='false', users= state.userDetails
            console.log(payload)
            // check user vlidation
            users.forEach(user=>{
                if(user.username === payload.username && user.password === payload.password){
                    flag=true;
                    state.loginUser=user.username
                } 
            })
            if(flag){
                state.isAuth=true;
            }
            return{
                ...state
            }
        }
        default:{
            return {...state};
        }
    }
}

export default reducer;