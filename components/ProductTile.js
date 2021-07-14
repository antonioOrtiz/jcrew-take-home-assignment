import { now } from 'lodash';
import React from 'react'
import Image from 'next/image'

const ProductTile = ({ data }) => {
  let { productList } = data
  var [products] = productList
  console.log("products ", products.products);
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

        // Re-hide display:none elements,
        // so they can be toggled via JS.
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
  return (
    <div>
      <h1>Tiles</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        {
          products.reduce((products, product) => products.find(x => x.productId === product.productId) ? products : [...products, product], []).map(({ defaultColorCode, now, productId, productCode, productDescription, }, index) => {

            return (

              <div key={`${productId}${index}`} className="rounded overflow-hidden shadow-lg">
                <Image className="product-image" loader={myLoader}
                  src={`/${productCode}_${defaultColorCode}`} alt="Picture of the author" layout="fill" />

                <h1 key={productId} className="font-bold text-xl mb-2">{productDescription}</h1>
                <p className="text-gray-700 text-base">
                  {
                    now !== undefined
                      ? now.formatted
                      : null
                  }
                </p>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>

            )
          })}
      </div>

    </div>
  )








}


export default ProductTile
