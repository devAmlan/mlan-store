function filterbyPrice(products, sortBy) {
  if (sortBy === "lth") {
    return products.sort((firstitem, seconditem) => {
      return firstitem.productprice - seconditem.productprice
    })
  }
  if (sortBy === "htl") {
    return products.sort((firstitem, seconditem) => {
      return seconditem.productprice - firstitem.productprice
    })
  }
  return products
}

function filterbyRatings(products, rating) {
  if (rating) {
    return products.filter((item) => item.rating >= rating)
  }
  return products
}
function filterbyCategory(products, category) {
  let filteredArray = []
  for (let i in category) {
    if (category[i]) {
      const result = products.filter((item) => item.category === i)
      filteredArray.unshift(...result)
    }
  }
  return filteredArray.length === 0 ? products : filteredArray
}


export { filterbyPrice, filterbyRatings, filterbyCategory }