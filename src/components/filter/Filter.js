import React, { useContext } from 'react'
import "./Filter.css"
import { FilterContext } from "../../context/Filtercontext"

function Filter() {
  const { state: { category }, dispatch } = useContext(FilterContext)

  return (
    <>
      <div className="filter">
        <div className="category_filter">
          <h4>Category</h4>
          <input
            type="checkbox"
            id="keyboards"
            className="filter_input"
            value={category.keyboards}
            onChange={(e) => { dispatch({ type: "keyboards", payload: e.target.value }) }}
          />
          <label htmlFor='keyboards' className="filter_label">Keyboards</label><br />
          <input
            type="checkbox"
            className="filter_input"
            id="switches"
            value={category.switches}
            onChange={(e) => { dispatch({ type: "switches", payload: e.target.value }) }}
          />
          <label htmlFor='switches' className="filter_label">Switches</label><br />

          <input
            type="checkbox"
            className="filter_input"
            id="accessories"
            value={category.others}
            onChange={(e) => { dispatch({ type: "others", payload: e.target.value }) }}
          />
          <label htmlFor='accessories' className="filter_label">Accessories</label><br />
        </div>

        <div className="rating_filter">
          <h4>Rating</h4>
          <div>
            <input
              type="radio"
              name="rating"
              className="filter_input"
              id="fourstar"
              value="4"
              onChange={(e) => {
                dispatch({ type: "rating", payload: e.target.value })
              }}
            />
            <label htmlFor='fourstar' className="filter_label">4 stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              className="filter_input"
              value="3"
              id="threestar"
              onChange={(e) => { dispatch({ type: "rating", payload: e.target.value }) }}
            />
            <label htmlFor='threestar' className="filter_label">3 stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id="twostar"
              className="filter_input"
              value="2"
              onChange={(e) => { dispatch({ type: "rating", payload: e.target.value }) }}
            />
            <label Htmlfor="twostar" className="filter_label">2 stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              className="filter_input"
              value="1"
              id="onestar"
              onChange={(e) => { dispatch({ type: "rating", payload: e.target.value }) }}
            />
            <label Htmlfor="onestar" className="filter_label">1 stars & above</label>
          </div>
        </div>
        <div className="sort_filter">
          <h4>Sort by</h4>
          <input
            type="radio"
            id="lth"
            value="lth"
            name="sort"
            className="filter_input"
            onChange={() => { dispatch({ type: "sortBy", payload: "lth" }) }}
          />
          <label Htmlfor="lth" className="filter_label">Price - Low to high</label><br />
          <input
            type="radio"
            id="htl"
            value="htl"
            name="sort"
            className="filter_input"
            onChange={() => { dispatch({ type: "sortBy", payload: "htl" }) }}
          />
          <label Htmlfor="htl" className="filter_label">Price - High to low</label>
        </div>
      </div>
    </>
  )
}

export default Filter