import React from 'react'
import "./colorControler.css"

function ColorControle({ changeColorWhite }) {

  return (
    <div className='wrapperControlers'>
        <div className='whiteControlerBlock'>
            <button onClick={() => changeColorWhite()} className='white'/>
        </div>
          
        <div className='blackControlerBlock'>
            <button className='black'/>
        </div>
    </div>
  )
}

export default ColorControle
