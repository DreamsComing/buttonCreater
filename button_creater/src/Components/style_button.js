import React from 'react'
import "../Components/style_button.css"

function Style_button({ value,
    width,
    height,
    valueFunction,
    widthFunction,
    heightFunction,
    color,
    colorBackFunction,
    colorText,
    colorTextFunction,
    border,
    borderFunction,
    handleOwnStyleChange,
    handleTypeStyleChange,
    AddCustomStyle,
    customOwnStyle,
    customStyleType

}) {

    return (
    <div className='Style_Block'>
            <div className='styleInformatiom'>
            <div className='basicStyles'>
                <p> <input placeholder='Text' value={value} onChange={valueFunction}/> , <input placeholder='colorText' className='b' value={colorText} onChange={colorTextFunction}/></p>  
                <p> <input placeholder='Width' value={width} onChange={widthFunction}/></p>  
                <p><input placeholder='Height' value={height} onChange={heightFunction}/></p>  
                <p><input placeholder='Border' value={border} onChange={borderFunction}/></p>  
                <p><input placeholder='Color' value={color} onChange={colorBackFunction} /></p>  
            </div>

                <div className="App">
                    <div className='appButton'>
                        <button onClick={() => AddCustomStyle()} onChange={(e, index) => handleOwnStyleChange(e)}>+</button>
                    </div>

                    <p className='text'>Add your own style:</p>
                    <div className='inputs'>
                        <div className='typeOfStyle'>

                            {customStyleType.map((style, index) => (
                                <div className='inputBlock' key={index}>
                                    <input
                                        placeholder='Style:'
                                        value={style.type}
                                        onChange={(e) => handleTypeStyleChange(e, index)}
                                    />
                                </div>
                
                            ))}
   
                            
                        </div>
                        <div className='styleline'>
                            {customOwnStyle.map((style, index) => (
                                <div className='inputBlock' key={index}>
                                    <input
                                        placeholder='...'
                                        value={style.ownStyle}
                                        onChange={(e) => handleOwnStyleChange(e, index)}
                                    />
                                </div>
                            
                                ))}
                        </div>
                    </div>
               
            </div>
            </div>
    </div>
  )
}

export default Style_button
