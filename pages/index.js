import Head from 'next/head'

import ProductPage from './products.js'

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

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Category Page 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductPage data={data} />
    </>
  )
}
