import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio,  imagen }) => {
  
  return (
    <div>
      
          <div key={ id } >
            <div className="card w-[300px] min-h-[400px] flex flex-col justify-between  border-none p-2 "  >
            
            <Link to={`/item/${id}`} className='w-full h-full flex flex-col'>

              <img srcSet={imagen} className='max-h-[150px] w-[180px] m-auto '  alt={nombre} />
              <div className="card-body">
                <h5 className=" text-[20px] font-thin ">{nombre}</h5>
                
              </div>
              </Link>
              <ul className=" flex flex-col justify-start items-start gap-3 border-t-[2px] pl-4">
              
              <li className="pt-3 font-light  text-[28px]">${precio}</li>
              <li className=" text-gray-400 ">Envío gratis a todo el país</li>
              <button className="block rounded bg-gray-700 px-3 py-2 text-sm text-gray-100 transition hover:bg-[#0CC0DF] mb-3"> <Link to={`/item/${id}`} className='text-white' style={{textDecoration:"none"}}>Ver producto</Link> </button>
                
              </ul>

              
          </div>
          </div>
          
    </div>
  )
}

export default Item