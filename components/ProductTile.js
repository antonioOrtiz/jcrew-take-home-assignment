import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductTile = ({ data }) => {
  let { productList } = data
  var [products] = productList
  var { products } = products;

  React.useEffect(() => {
    function remove_style(all) {
      var i = all.length;
      var j, is_hidden;

      // Presentational attributes.
      var attr = [
        'align',
        'background',
        'bgcolor',
        'border',
        'cellpadding',
        'cellspacing',
        'color',
        'face',
        'height',
        'hspace',
        'marginheight',
        'marginwidth',
        'noshade',
        'nowrap',
        'valign',
        'vspace',
        'width',
        'vlink',
        'alink',
        'text',
        'link',
        'frame',
        'frameborder',
        'clear',
        'scrolling',
        'style'
      ];

      var attr_len = attr.length;

      while (i--) {
        is_hidden = (all[i].style.display === 'none');

        j = attr_len;

        while (j--) {
          all[i].removeAttribute(attr[j]);
        }

        if (is_hidden) {
          all[i].style.display = 'none';
          is_hidden = false;
        }
      }
    }
    var all = window.document.getElementsByTagName('*');
    remove_style(all);
  }, [])

  const myLoader = ({ src }) => {
    return `https://www.jcrew.com/s7-img-facade/${src}`
  }

  const getColorSwatches = (products, index) => {
    if (products[index] != undefined) {
      return JSON.stringify(products[index].colors)
    }
  }

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          products.reduce((products, product) => products.find(x => x.productId === product.productId) ? products : [...products, product], []).map(({ colorCode, defaultColorCode, now, productId, productCode,
            productDescription, }, index) => {
            let path = `https://www.jcrew.com/s7-img-facade/${productCode}_${defaultColorCode}`
            let swatches = getColorSwatches(products, index)

            return (
              <Link key={`${productId}${index}`}
                href={{
                  pathname: '/s7-img-facade/[slug]',
                  query: {
                    defaultColorCode: defaultColorCode,
                    slug: productCode,
                    description: productDescription, image: path, price: now !== undefined
                      ? now.formatted
                      : 'Not-available',
                    colors: swatches

                  },
                }}
                passHref>
                <div className="product-link p-2 rounded overflow-hidden shadow-lg">
                  <Image className="product-image" loader={myLoader}
                    src={`/${productCode}_${defaultColorCode}`} alt={productDescription} layout="fill" />

                  <p className="font-medium text-sm mb-2">{productDescription}</p>
                  <p className="text-sm text-gray-700">
                    {
                      now !== undefined
                        ? now.formatted
                        : 'Not-available'
                    }
                  </p>

                </div>
              </Link>
            )
          })}
      </div>

    </div>
  )
}


export default ProductTile
