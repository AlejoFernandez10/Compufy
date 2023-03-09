import React from 'react'
import { CartContext } from '../context/CartContextProvider';
import { useContext } from 'react';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)
  
  console.log(cart)
  
  return (
    <div>

        <h2 style={{marginTop:"100px"}}>El carrito está vacío</h2>

    </div>
  )
}

export default Cart