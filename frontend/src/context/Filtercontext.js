import React,{createContext,useReducer} from 'react'
import { FilterReducer } from "../reducer/FilterReducer"
import { Productdb } from '../api/db/Productdb'
const FilterContext = createContext()

function FilterProvider({children}) {
  const [state,dispatch] = useReducer(FilterReducer,{ productDb: Productdb })
  return (
    <FilterContext.Provider value={{state,dispatch,Productdb}}>
    {children}
    </FilterContext.Provider>
  )
}

export { FilterContext , FilterProvider}