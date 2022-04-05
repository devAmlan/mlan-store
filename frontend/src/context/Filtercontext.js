import React, { createContext, useReducer } from 'react'
import { FilterReducer } from "../reducer/FilterReducer"

const FilterContext = createContext()

function FilterProvider({ children }) {

  const [state, dispatch] = useReducer(FilterReducer, { sortBy:null ,rating:null,category:{keyboards:false,switches:false,others:false} })
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }