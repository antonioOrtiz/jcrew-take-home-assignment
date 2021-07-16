import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import dynamic from 'next/dynamic'


const ProductPage = dynamic(
  () => import('./products.js'),
  { ssr: false }
)

const fetchRelative = (req, path) => {
  const { origin } = absoluteUrl(req)
  return fetch(`${origin}${path}`);
}

export const getStaticProps = async ({ req, res }) => {
  if (typeof (window) !== 'undefined') {
    var res = await fetchRelative(req, '/category-server/')
    var data = await res.json()
  }
  return {
    props: {
      data: data || {}
    },
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
