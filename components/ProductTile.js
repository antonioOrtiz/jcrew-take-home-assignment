import React from 'react'

const ProductTile = ({ data }) => {
  let { productList } = data
  var [products] = productList
  console.log("products ", products.products);
  var { products } = products
  return (
    <div>
      <h1>Tiles</h1>
      {
        products.map(({ productDescription }) => {
          return (
            <>
              <h1>{productDescription}</h1>
            </>
          )
        })}
    </div>
  )








}


export default ProductTile
