import React from 'react'
import CartImg from '../assets/carrito-icon.png'

import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className='flex'>
      <Link to={"/cart"}>
      <img src={CartImg} height="40px" style={{marginTop:"10px"}} alt="" />
      </Link>
      <span className='text-black mt-[25px] text-[22px]'>0</span>
    </div>
  )
}

export default CartWidget