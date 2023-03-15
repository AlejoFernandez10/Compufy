import React, { useState } from 'react'
import { CartContext } from '../context/CartContextProvider';
import { useContext } from 'react';
import Loader from './Loader';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext) 
   
  


 



    if(cart.length === 0){
      return(
        <>
          <h2 className='mt-[200px] mb-[100px] text-[30px]'>El carrito está vacío...</h2>
        </>
      )
    }else{
      return(
        <>
        <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[1000px]  h-auto flex flex-col justify-center items-center mt-[80px]'>
            {cart.map((prod)=>(
            
              <div key={prod.id} className="mt-[15px]   h-[9vh] w-full flex justify-between items-center border-[1px] rounded-lg border-gray-700 px-6 py-2">
              
                <img srcSet={prod.img} className="h-[100%] "></img>
                <span>{prod.title}</span>
                <span>  Cantidad: {prod.cantidad}</span>
                <span>  Precio: {prod.price}</span>
            
              </div>
  
            ))}
            <button className='self-end mr-[20px] mt-[20px] text-[#f22]' onClick={()=> setCart([])}>Vaciar Carrito</button>
            </div>
            
        </div>
  
        
        </>
      )
    }



  


  
}

export default Cart