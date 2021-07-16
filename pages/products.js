import React from 'react'
import Layout from '../components/Layout.js'
import ProductTile from '../components/ProductTile.js'
import { NextSeo } from 'next-seo'; // then add the `NextSeo` at any `pages/` that you wish

function ProductPage({ data }) {
  return (
    <>
      <NextSeo
        title="Product Page"
      />
      <Layout>
        <h1 className="p-10">Product Page</h1>
        <ProductTile data={data} />
      </Layout>
    </>
  )
}

export default ProductPage
