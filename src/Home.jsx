
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount (count+1)
     
    
  }
  
  const dec = () => {
    if (count === 0) {
      setCount(0)
      console.log("secomnf")
    } else {
      setCount (count-1)
    }

 
    
  }
  const reset = () => {
    setCount(0)
    console.log("first")
     
    
  }
  


  return (
    <div>
      <p >{count}</p>
      <button onClick={inc}>Incrment</button>
      <button onClick={dec}>Decrement</button>
      
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Home