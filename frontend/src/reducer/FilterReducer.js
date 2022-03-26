export function FilterReducer(state, action) {

  if (action.type === "lth") {
    return {
      ...state, productDb: state.productDb.sort((firstitem, seconditem) => {
        return firstitem.productprice - seconditem.productprice
      })
    }
  }
  else if (action.type === "htl") {
    return {
      ...state, productDb: state.productDb.sort((firstitem, seconditem) => {
        return seconditem.productprice - firstitem.productprice
      })
    }
  }
  else if (action.type === "fourstar") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.rating >= 4.0
      })
    }
  }
  else if (action.type === "threestar") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.rating >= 3.0
      })
    }
  }
  else if (action.type === "twostar") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.rating >= 2.0
      })
    }
  }
  else if (action.type === "onestar") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.rating >= 1.0
      })
    }
  }
  else if (action.type === "category") {
    return {...state,productDb:state.productDb.filter((item)=> item.category === action.payload)}
  }

   else {
    return { ...state, productDb: action.payload }
  }
}