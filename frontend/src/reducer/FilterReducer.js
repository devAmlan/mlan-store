export function FilterReducer(state, action) {

  if (action.type === "lth") {
    return {
      ...state, productDb: action.payload.sort((firstitem, seconditem) => {
        return firstitem.productprice - seconditem.productprice
      })
    }
  }
  else if (action.type === "htl") {
    return {
      ...state, productDb: action.payload.sort((firstitem, seconditem) => {
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
  else if (action.type === "keyboards") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.category === "keyboards"
      })
    }
  }
  else if (action.type === "switches") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.category === "switches"
      })
    }
  }
  else if (action.type === "accessories") {
    return {
      ...state, productDb: action.payload.filter((item) => {
        return item.category === "accessories"
      })
    }
  } else {
    return { ...state, productDb: action.payload }
  }
}