import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout.js'

import CategoryPage from './category-page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Category Page 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CategoryPage />
    </>
  )
}
