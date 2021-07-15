import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Swatches = ({ productCode, colors }) => {

  useEffect(() => {
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


  const handleSwatchLoader = (name) => {
    setSwatchName(name)
  }


  const myLoader = ({ src }) => {
    return `https://www.jcrew.com/s7-img-facade/${src}_sw`
  }

  return (
    <div>
      <p className=" font-medium text-m mb-2">Color: {
        swatch.colorName.charAt(0) + swatch.colorName.substring(1).toLowerCase()
      }</p>
      {colors.map((swatch, index) => {

        return (
          <>


            <Image key={swatch.colorCode} className="swatch" loader={myLoader}
              src={`/${productCode}_${swatch.colorCode}`} alt={swatch.colorName.charAt(0) + swatch.colorName.substring(1).toLowerCase()} layout="fill" />
          </>
        )
      })
      }


    </div >
  )
}


export default Swatches
