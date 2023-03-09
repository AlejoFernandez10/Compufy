import React from 'react'
import CartImg from '../assets/carrito-icon.png'

import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
      <Link to={"/cart"}>
      <img src={CartImg} height="40px" style={{marginTop:"20px"}} alt="" />
      </Link>
      <span style={{color:"#222", fontSize:"20px"}}>0</span>
    </div>
  )
}

export default CartWidget