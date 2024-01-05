/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import './App.css';
import Button_value from './Components/button_value'; 
import Style_button from './Components/style_button'; 
import ColorControle from './Components/colorControle/colorControle';
  
function App() {
  const [value, setValue] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [color, setColor] = useState('')
  const [colorText, setColorText] = useState('')
  const [create, setCreate] = useState(false)
  const [border, setBorder] = useState(0)

  const [white, setWhite] = useState({
    background: '#000'
  })
  const [black, setBlack] = useState({
    background: '#fff'
  })

  const [typeOfStyle, setTypeOfStyle] = useState('')
  const [customStyleType, setCustomeStyleType] = useState([{type: ''}])
  const [customOwnStyle, setCustomeOwnStyle] = useState([{ownStyle: '' }])

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
  
  const BackgroundControler = () => {
    if (white || black) {
      setWhite({
        background: '#fff'
      })
    } else {
      setBlack({
        background: '#000'
      })
    }

  }
  
  return (
      <div style={white}>
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
      <ColorControle changeColorWhite={BackgroundControler} />
    </div>
    );
  }


export default App;
