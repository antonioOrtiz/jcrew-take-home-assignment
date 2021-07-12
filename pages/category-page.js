import Link from 'next/link'
import Layout from '../components/Layout.js'
import { NextSeo } from 'next-seo'; // then add the `NextSeo` at any `pages/` that you wish

function ProductPage({ }) {
  return (
    <>
      <NextSeo
        title="Category Page"
      />
      <Layout>
        <h1>Category Page</h1>
      </Layout>
    </>
  )
}

export default ProductPage
