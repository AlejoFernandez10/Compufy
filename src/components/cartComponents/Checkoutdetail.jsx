import React from 'react'

import { CartContext } from '../../context/CartContextProvider'
import { useContext } from 'react'


const Checkoutdetail = () => {

    const [cart,setCart] = useContext(CartContext)

  return (
    <div className='min-h-[200px] w-full flex flex-col  items-center mt-16' >

        <h3 className='text-[23px] text-left mb-[30px] '>Mi Compra: </h3>

        <div className='min-w-[999px] max-w-[1000px] rounded-[5px] min-h-[20vh] flex flex-wrap gap-2  '>


            {cart.map((prod)=>(

                <div className='min-h-[200px] w-[150px] bg-gray-200 flex flex-col justify-between' key={prod.id}>
                    <h5>{prod.nombre} </h5>
                    <img srcSet={prod.imagen} alt={prod.nobre} />
                    <p>${prod.precio} </p>
                    <p>Estado: Pendiente</p>
                </div>

            ))}

            




        </div>

    </div>
  )
}

export default Checkoutdetail