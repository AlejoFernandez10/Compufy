import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, categoria, imagen }) => {
  
  return (
    <div>
      
          <div key={ id } >
            <div className="card w-[300px] min-h-[400px] flex flex-col justify-between border-none p-2 "  >
            
            <Link to={`/item/${id}`}>

              <img srcSet={imagen} className='h-[180px] w-[200px] m-auto '  alt="..." />
              <div className="card-body">
                <h5 className=" text-[20px] font-semibold ">{nombre}</h5>
                
              </div>
              </Link>
              <ul className=" flex justify-center gap-3 border-t-[2px] ">
              <li className=" text-gray-400 pt-3">{categoria}</li>
              <li className="pt-3 font-semibold">${precio}</li>
                
              </ul>
              <div className="card-body">
                
                <button className="btn btn-primary scale-100 transition duration-200 hover:scale-105"> <Link to={`/item/${id}`} style={{color:"#fff", textDecoration:"none"}}>Details</Link> </button>
                
              </div>
          </div>
          </div>
          
    </div>
  )
}

export default Item