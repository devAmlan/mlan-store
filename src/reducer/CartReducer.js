export function cartReducer(state, action) {

    if (action.type === "ADD_TO_CART") {
        return { ...state, cartProducts: [...state.cartProducts, { ...action.payload, quantity: 1 }] }
    }
    else if (action.type === "REMOVE_FROM_CART") {
        return { ...state, cartProducts: state.cartProducts.filter((item) => item.productid !== action.payload.productid) }
    }
    else if (action.type === "INCREASE_QUANTITY") {
        return {
            ...state, cartProducts: state.cartProducts.map((item) => {
                return item.productid === action.payload.productid ? { ...action.payload, quantity: item.quantity + 1 } : item;
            })
        }
    }
    else if (action.type === "DECREASE_QUANTITY") {
        return {
            ...state, cartProducts: state.cartProducts.map((item) => {
                return item.productid === action.payload.productid ? { ...action.payload, quantity: item.quantity - 1 } : item;
            })
        }
    }
}