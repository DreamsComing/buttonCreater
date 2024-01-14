/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import './App.css';
import Style_button from './Components/style_button';
import Button_value from './Components/button_value'; 

  
function App() {
  const [value, setValue] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [color, setColor] = useState('')
  const [colorText, setColorText] = useState('')
  const [create, setCreate] = useState(false)
  const [border, setBorder] = useState(0)

  const [typeOfStyle, setTypeOfStyle] = useState('')
  const [customStyleType, setCustomeStyleType] = useState([{type: ''}])
  const [customOwnStyle, setCustomeOwnStyle] = useState([{ ownStyle: '' }])

  const [bacgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black')
  
  useEffect(() => {
    document.body.style.backgroundColor = bacgroundColor;
    document.body.style.color = textColor;
    
    return () => {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = "black";
    }
  }, [bacgroundColor, textColor])

  const colorChanger = (color, colorText) => {
    setBackgroundColor(color)
    setTextColor(colorText)
  }

  const typeStyleFunction = (event) => {
    let newTypeStyle = event.target.value
    setTypeOfStyle(newTypeStyle)
  }

  
    const valueFunction = (event) => {
      let textValue = event.target.value
      setValue(textValue)
      setCreate(!create)
    }

    const widthFunction = (event) => {
      const newWidth = event.target.value
      setWidth(newWidth)
    }

    const heightFunction = (event) => {
      let styleHeight = event.target.value
      setHeight(styleHeight)
    }

    const colorBackFunction = (event) => {
      let styleColor = event.target.value
      setColor(styleColor)
    }
    const colorTextFunction = (event) => {
      let styleColorText = event.target.value
      setColorText(styleColorText)
    }
    const borderFunction = (event) => {
      let newBorder = event.target.value
      setBorder(newBorder)
    }
  const AddCustomStyle = () => {
    setCustomeStyleType([...customStyleType, { type: '',}]);
    setCustomeOwnStyle([...customOwnStyle, { ownStyle: '' }]);
  };
  const handleTypeStyleChange = (event, index) => {
    const updatedStyles = [...customStyleType];
    updatedStyles[index].type = event.target.value;
    setCustomeStyleType(updatedStyles);
  };

    const handleOwnStyleChange = (event, index) => {
    const updatedStyles = [...customOwnStyle];
    updatedStyles[index].ownStyle = event.target.value;
    setCustomeOwnStyle(updatedStyles);
    };
  

  return (
    <div style={{
      background: bacgroundColor
    }} class='bacground'>
      <div className='wrapperControlers'>
        <div className='whiteControlerBlock'>
            <button  onClick={() => colorChanger('white', "black")} className='white'/>
        </div>
          
        <div className='blackControlerBlock'>
            <button onClick={() => colorChanger('#353434', 'white')} className='black'/>
        </div>
      </div>
        <Style_button value={value}
          height={height}
          color={color}
          colorText={colorText}
        border={border}
        customStyleType={customStyleType}
        customOwnStyle={customOwnStyle}
          handleOwnStyleChange={handleOwnStyleChange}
          handleTypeStyleChange={handleTypeStyleChange}
          valueFunction={valueFunction}
          heightFunction={heightFunction}
          widthFunction={widthFunction}
          colorBackFunction={colorBackFunction}
          colorTextFunction={colorTextFunction}
          borderFunction={borderFunction}
          typeStyleFunction={typeStyleFunction}
          AddCustomStyle={AddCustomStyle}
        />
        <hr />
        <Button_value value={value}
          width={width}
          height={height}
          color={color}
          colorText={colorText}
          border={border}
          typeOfStyle={typeOfStyle}
          customStyleType={customStyleType}
        customOwnStyle={customOwnStyle}
      />
    </div>
    );
  }


export default App;
