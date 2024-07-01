import React, { useState } from 'react'
import ChildPage from './ChildPage'

const ParentPage = () => {

 const [data, setData] = useState()
  
  const finddata = (res) => {
   setData(res)
  }
  
 
  return (
    <div>
      <h4>Parent:{data}</h4>
    
      <ChildPage senddata={ finddata} />
    </div>
  )
}

export default ParentPage