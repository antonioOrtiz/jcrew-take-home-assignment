import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Swatches from '../../components/Swatches.js'

function Product({ query }) {
  var { description, colors, product, image, price } = query;
  colors = JSON.parse(colors)


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

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <Link href="#"
        passHref>
        <div className="product-link p-2 rounded overflow-hidden shadow-lg">
          <Image className="product-image" loader={myLoader}
            src={`/${image}`} alt="Picture of the author" layout="fill" />

          <p className="font-medium text-sm mb-2">{description}</p>
          <p className="text-sm text-gray-700">
            {
              price
            }
          </p>
        </div>
      </Link>

      <span className="p-3 font-medium text-sm mb-2">
        <Swatches productCode={product} colors={colors} />
      </span>

    </div>
  )
}

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      query
    }
  }
}



export default Product
