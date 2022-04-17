export const ProductReducer = (state, action) => {

    if (action.type === "PRODUCTS") {
        return { ...state, productDb: action.payload }
    } else if (action.type === "ERROR") {
        return { ...state, error: state.payload }
    }
    else {
        return { ...state }
    }
}