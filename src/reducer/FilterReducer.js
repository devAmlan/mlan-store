
export function FilterReducer(state, action) {

  const { keyboards, switches, others } = state.category
  switch (action.type) {
    case "sortBy":
      return { ...state, sortBy: action.payload }
    case "rating":
      return { ...state, rating: parseInt(action.payload) }

    case "keyboards":
      return { ...state, category: { ...state.category, keyboards: !keyboards } }
    case "switches":
      return { ...state, category: { ...state.category, switches: !switches } }
    case "others":
      return { ...state, category: { ...state.category, others: !others } }
    default:
      return { ...state }
  }
} 
