import React from 'react'
import CartImg from '../../assets/carrito-icon.png'

import { CartContext } from '../../context/CartContextProvider'
import { useContext } from 'react'

import { Link } from 'react-router-dom'

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);


  return (
    <div className='flex'>
      <Link to={"/cart"}>
      <img src={CartImg} height="40px" className='mt-[25px] ' alt="" />
      </Link>
      <span className='text-black mt-[25px] text-[16px]'>{cantidad} </span>
    </div>
  )
}

export default CartWidget