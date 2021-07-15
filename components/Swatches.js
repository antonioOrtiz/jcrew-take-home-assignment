import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Swatches = ({ defaultColorCode, handleProductChange, productCode, colors }) => {

  let [swatchName, setSwatchName] = useState('');

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

  const myLoader = ({ src }) => {
    return `https://www.jcrew.com/s7-img-facade/${src}_sw`
  }

  const handleColorChange = (productCode, colorCode, swatch) => {
    handleProductChange(colorCode, productCode);
    setSwatchName(swatch)
  }

  return (
    <div>
      <p className=" font-medium text-m mb-2">Color: {
        swatchName
      }</p>

      {colors.map((swatch, index, arr) => {
        return (
          <div key={swatch.colorCode} className="inline-block">
            <Image onLoad={() => {
              var swatchName = arr.sort(function (x, y) {
                return x.colorCode == defaultColorCode ? -1 : y.colorCode == defaultColorCode ? 1 : 0;
              })

              console.log("swatchName ", swatchName);
              setSwatchName(() => swatchName[0].colorName.charAt(0) + swatchName[0].colorName.substring(1).toLowerCase())

            }
            } onClick={() => {
              handleColorChange(swatch.colorCode, productCode, swatch.colorName.charAt(0) + swatch.colorName.substring(1).toLowerCase())
            }
            } className=" swatch" loader={myLoader}
              src={`${productCode}_${swatch.colorCode}`} alt={swatch.colorName.charAt(0) + swatch.colorName.substring(1).toLowerCase()} layout="fill" />
          </div>
        )
      }).sort(function (x, y) {
        return x.key == defaultColorCode ? -1 : y.key == defaultColorCode ? 1 : 0;
      })
      }

    </div >
  )
}


export default Swatches
