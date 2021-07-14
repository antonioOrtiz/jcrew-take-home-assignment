import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import ProductTile from '../components/ProductTile.js'
import { NextSeo } from 'next-seo'; // then add the `NextSeo` at any `pages/` that you wish

// This function gets called at build time
export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:8000/category-server/')
    const data = await res.json()

    return {
      props: {
        data: data
      },
    }
  } catch (error) {
    console.log('errors', error)
  }

}


function ProductPage({ data }) {
  return (
    <>
      <NextSeo
        title="Product Page"
      />
      <Layout>
        <h1>Product Page</h1>
        <ProductTile data={data} />
      </Layout>
    </>
  )
}

export default ProductPage
