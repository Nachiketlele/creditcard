import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { useRef } from "react";
import Pinitems from "./Pinitems";
const Pin = ({ length, setOtpHandler, otp }) => {
  const inputRef = useRef([]);
  const [inputBox] = useState(new Array(length).fill(1));
  const [inputValue, setInputvalue]= useState(
    new Array(length).fill("")
  )

  const handleChange = (e, index, item) => {
    inputValue[index] = e.target.value
    setInputvalue(inputValue)
     console.log(otp.length)
     if ( index < length-1 && e.target.value.length === 5) {
      inputRef.current[index + 1].focus();
    }

    console.log(inputValue)
    setOtpHandler(inputValue.join(""))
  };



  const handleBackSpace = (e,index) =>{
    if (index > 0 && e.target.value.length === 0) {
        inputRef.current[index - 1].focus();
      }
      inputValue[index] = e.target.value
      setOtpHandler(inputValue.join(""))

  }

  const handlePaste = (e)=>{
    e.preventDefault();

    const data = e.clipboardData
    .getData("text")
    .split("")
    .filter((item,index)=>index< length)
    data.forEach((value,index)=>{
       inputValue[index] = value
       inputRef.current[index].value = value

       if(index<length-1 && e.target.value.length === 5){
        inputRef.current[index+1].focus()
       }
    })
  }
  return (
    <div onPaste={handlePaste} style={{display:"flex", gap:"10px", justifyContent:"center"}}>
      {inputBox.map((item, index) => {
       
        return (
          <Pinitems 
            ref={(element) => {
              inputRef.current[index] = element;
                //  console.log(inputRef.current);
            }}
           
            key={index}
            onChange={(e) => handleChange(e, index)}
            handleBackSpace= {(e) => handleBackSpace(e, index)}
          />
          
        );
      })}
    </div>
  );
};

// PropTypes -> way to limit the types of props that you get

Pin.prototype = {
  lenght: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pin;
