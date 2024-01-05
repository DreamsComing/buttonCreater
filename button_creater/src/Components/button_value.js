import React from 'react'
import '../Components/button_value.css'

function Button_value({ value, width, height, color, colorText, border, customStyleType, customOwnStyle }) {
const dynamicStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    color: colorText,
    borderRadius: `${border}px`,
    ...customStyleType.reduce((acc, style, index) => {
      if (style.type && customOwnStyle[index].ownStyle) {
        acc[style.type] = customOwnStyle[index].ownStyle;
      }
      return acc;
    }, {})
    }
    console.log({customStyleType} , {customOwnStyle})
return (
    <div className='button_value'>
        <button style={ dynamicStyle }>
            {value}
        </button>

    </div>
  )
}

export default Button_value
