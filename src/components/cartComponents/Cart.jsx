import React from 'react'
import { CartContext } from '../../context/CartContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)




  //SUMAR PRECIO TOTAL
  let precioTotal = 0;

  cart.forEach(item => {
      precioTotal += (item.precio * item.cantidad)
  });



  //SI NO HAY NADA EN EL CARRITO 

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
    }                // SI EL CARRITO TIENE ITEMS
    else{
      return(

        
        
        
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
          
          {cart.map((prod)=>(

              <li className="flex items-center gap-4" key={prod.id} >
                <img
                  srcSet={prod.imagen}
                  alt={prod.name}
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900"> {prod.nombre} </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Categoria:</dt>
                      <dd className="inline"> {prod.categoria} </dd>
                    </div>

                    
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  
                  
                  <div className='flex '>
                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                    <p className=" w-[30px] rounded flex items-center justify-center text-[21px] border-gray-300 bg-gray-200 p-0 text-center text-xs text-gray-900 "
                    >
                      {prod.cantidad}
                    </p>

                    <span className='ml-[20px] '>
                      ${prod.precio * prod.cantidad}
                    </span>
                  </div>

                  
                </div>
                </li>

          ))}

          

          
        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt className=' font-light '>Subtotal</dt>
                <dd className='text-[18px] '>${precioTotal} </dd>
              </div>

              <div className="flex justify-between">
                <dt className=' font-light '>IVA:</dt>
                <dd className=' font-light '>21%</dd>
              </div>

              <div className="flex justify-between !text-base mt-4 ">
                <dt className='text-[19px] '>Total:</dt>
                <dd className='text-[22px] font-semibold '>${precioTotal + (precioTotal * 0.21)}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              
            </div>

            <div className="flex justify-end gap-2">
            <button
                onClick={()=> setCart([])}
                className="block rounded bg-red-700 px-4 py-3 text-sm text-gray-100 transition hover:bg-red-600  "
              >
                Vaciar Carrito
              </button>
              <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <CartForm />
</section>

         
      )
    }

  
}

export default Cart








