import React, {useEffect, useState,useRef } from 'react'

const ChildPage = () => {
   const bodyRef = useRef(document.body);
  const [bgColor, setBgColor] = useState('');
  
  const handleChange = (event) => {
    const selectedColor = event.target.value;
    
      setBgColor(selectedColor);
   
  };
  useEffect(() => {
    bodyRef.current.style.backgroundColor = bgColor;
    
  },[bgColor])
  return (
 <div>
      <select onChange={handleChange}>
        <option >Select Color</option>
        <option value="red">Red</option>
         <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
     
    </div>
  )
}

export default ChildPage