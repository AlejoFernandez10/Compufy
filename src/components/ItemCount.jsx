import React from 'react'
import { useState } from 'react'


const ItemCount = () => {

    const [count,setCount] = useState(1);  
    
  
  
  return (
    <div >
      <div style={{width:"100%",marginBottom:"10px",backgroundColor:"#eee", display:"flex", justifyContent:"space-evenly", borderRadius:"10px",marginLeft:"15px",marginRight:"15px"}}>
        <button style={{paddingLeft:"15px",paddingRight:"15px", border:"none" }} onClick={()=>{if(count > 1){setCount(count - 1)}}}>-</button>
        <span>{count}</span>
        <button style={{paddingLeft:"15px",paddingRight:"15px", border:"none" }} onClick={()=>{setCount(count + 1)}}>+</button>
        
      </div>
    </div>
  )
}

export default ItemCount