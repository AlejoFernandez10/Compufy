import React from 'react'

import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { useContext } from 'react'

import Checkoutdetail from './Checkoutdetail'

import withReactContent from 'sweetalert2-react-content';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'


const MySwal = withReactContent(swal)


const CartForm = () => {


    const [cart, setCart] = useContext(CartContext)

    
    //Alertas
    const compraExitosa = ()=>{
      MySwal.fire({
        title: <strong>Compra realizada!</strong>,
        html: <i>Puede seguir la compra con el id generado </i>,
        icon: 'success',
        confirmButtonText:'<a href="#detalleCompra">Ver mi compra</a>'
        
      })
    }

    const [orderId, setOrderId] = useState(null)
    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")
    const [number, setNumber] = useState("")
    const [prods, setProds]  = useState([])

    

    const db = getFirestore()

    const handleSubmit=(e)=>{

        e.preventDefault();

        addDoc(orderCollection, order)
        .then(( {id} ) => setOrderId((id)));
    }

    const order = {
        name,
        email,
        number,
        prods
    }

    const orderCollection = collection(db, "orden")


  
  return (
    <div className='min-h-[20vh] w-full flex justify-center items-center flex-col'>

        
        <h3 className='pt-4  text-[25px] text-gray-800  rounded-t-[6px] justify-self-start bg-gray-100 min-w-[500px] '>Finalizar compra</h3>
        <h4 className='bg-gray-100 min-w-[500px] pt-2 '>Generá tu ID</h4>
       <form action="" onSubmit={handleSubmit} className="h-full flex flex-col pt-[20px] bg-gray-100 min-h-[250px] min-w-[500px] rounded-[6px] rounded-t-none  justify-start items-center  max-w-[1000px] ">
       
       
        
        <input type="text" placeholder='Ingrese su nombre' className='bg-gray-200 rounded-[6px] text-gray-700 min-h-[40px] min-w-[300px] pl-2   ' required onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Ingrese su email' className='bg-gray-200 rounded-[6px] text-gray-700 min-h-[40px] min-w-[300px] mt-[20px] pl-2' required onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder='Número de teléfono' className='bg-gray-200 rounded-[6px] text-gray-700 min-h-[40px] min-w-[300px] mt-[20px] pl-2' required onChange={(e)=>setNumber(e.target.value)}/>
        
      
          <button type="submit" className='mt-[40px] mb-4 p-2 bg-[#0CC0DF] rounded-[6px] text-gray-200 scale-100 transition duration-200 hover:scale-105 ' onClick={()=> setProds(cart) & compraExitosa()} >Finalizar compra </button> 
      
        
        </form> 

        {orderId && (
          
          <>
          <div className='mt-[15px] '>

            <h3 className='font-semibold'> Su id de compra es:  { orderId} </h3>          
            
            
          </div>

          <Checkoutdetail />
          </>

        )}


    </div>
  )
}

export default CartForm