import React from 'react'
import { CartContext } from '../../context/CartContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)


    if(cart.length === 0){
      return(
        <div className='min-h-[100vh] w-full flex justify-center items-start '>
        <div className='min-h-[40vh] min-w-[1000px] mt-20 rounded-[7px] max-w-[1001px] bg-gray-100 '>
          <h2 className=' mb-[100px] mt-[100px] text-[30px]'>El carrito está vacío...</h2>
          
          <Link to={'/catalogo'}>
          <button className=' bg-[#0CC0DF] rounded-[7px] transition duration-200 scale-100 p-2 text-gray-100 hover:scale-105 cursor-pointer'>Ir a Comprar</button>
          
          </Link>
        </div>
        </div>
      )
    }else{
      return(
        <>
        <div className='w-full flex flex-col justify-center items-center '>
        <div className='w-full max-w-[1000px]  h-auto flex flex-col justify-center items-center mt-[80px] bg-gray-300'>
            
            {cart.map((prod)=>(
            
              <div key={prod.id} className="mt-[15px]   h-[9vh] w-full flex justify-between items-center border-b-[2px] rounded-lg  px-6 py-2">
              
                <img srcSet={prod.imagen} className="h-[100%] "></img>
                <span> {prod.nombre}</span>
                <span> Cantidad: {prod.cantidad}</span>
                <span> Precio: ${prod.precio}</span>
            
              </div>
  
            ))}
            <button className='self-end mr-[20px] mt-[20px] text-[#f22]' onClick={()=> setCart([])}>Vaciar Carrito</button>
            </div>

            <CartForm />
            
        </div>
  
        
        </>
      )
    }



  


  
}

export default Cart