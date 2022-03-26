import React, { useContext } from 'react'
import "./Filter.css"
import { FilterContext } from "../../context/Filtercontext"
function Filter() {
  const { Productdb, dispatch } = useContext(FilterContext)
  return (
    <>
      <div className="filter">
        <div className="category_filter">
          <h4>Category</h4>
          <input type="checkbox" className="filter_input"
            onChange={() => { dispatch({ type: "category", payload: "keyboards" }) }}
          />
          <label className="filter_label">Keyboards</label><br />
          <input type="checkbox" className="filter_input"
            onChange={() => { dispatch({ type: "category", payload: "switches" }) }}
          />
          <label className="filter_label">Switches</label><br />
          <input type="checkbox" className="filter_input"
            onChange={() => { dispatch({ type: "category", payload: "accessories" }) }}
          />
          <label className="filter_label">Accessories</label><br />
        </div>

        <div className="rating_filter">
          <h4>Rating</h4>
          <div>
            <input type="radio" name="rating" className="filter_input"
              onChange={() => { dispatch({ type: "fourstar", payload: Productdb }) }}
            />
            <label className="filter_label">4 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" className="filter_input"
              onChange={() => { dispatch({ type: "threestar", payload: Productdb }) }}
            />
            <label className="filter_label">3 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" className="filter_input"
              onChange={() => { dispatch({ type: "twostar", payload: Productdb }) }}
            />
            <label Htmlfor="2star" className="filter_label">2 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" className="filter_input" value="1star"
              onChange={() => { dispatch({ type: "onestar", payload: Productdb }) }}
            />
            <label Htmlfor="1star" className="filter_label">1 stars & above</label>
          </div>
        </div>
        <div className="sort_filter">
          <h4>Sort by</h4>
          <input type="radio" id="lth" value="lth" name="sort" className="filter_input"
            onChange={() => { dispatch({ type: "lth", payload: "" }) }}
          />
          <label Htmlfor="lth" className="filter_label">Price - Low to high</label><br />
          <input type="radio" id="htl" value="htl" name="sort" className="filter_input"
            onChange={() => { dispatch({ type: "htl", payload: "" }) }}
          />
          <label Htmlfor="htl" className="filter_label">Price - High to low</label>
        </div>
      </div>
    </>
  )
}

export default Filter