import React from 'react'

import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from 'react'

const CartForm = () => {

    const [orderId, setOrderId] = useState(null)
    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")


    const db = getFirestore()

    const handleSubmit=(e)=>{

        e.preventDefault();

        addDoc(orderCollection, order)
        .then(( {id} ) => setOrderId((id)));
    }

    const order = {
        name,
        email
    }

    const orderCollection = collection(db, "orden")



  return (
    <div className='min-h-[20vh] w-full flex justify-center items-center flex-col'>

        
        <h3 className='pt-4 mt-[50px] text-[25px] text-gray-800  rounded-t-[6px] justify-self-start bg-gray-300 min-w-[500px] '>Generar id de compra</h3>
       <form action="" onSubmit={handleSubmit} className="h-full flex flex-col pt-[40px] bg-gray-300 min-h-[250px] min-w-[500px] rounded-[6px] rounded-t-none  justify-start items-center  max-w-[1000px] ">
       
       
        
        <input type="text" placeholder='Ingrese su nombre' className='bg-gray-200 rounded-[6px] text-gray-700 min-h-[40px] min-w-[300px] pl-2   ' required onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Ingrese su email' className='bg-gray-200 rounded-[6px] text-gray-700 min-h-[40px] min-w-[300px] mt-[20px] pl-2' required onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit" className='mt-[40px] p-2 bg-[#0CC0DF] rounded-[6px] text-gray-200 scale-100 transition duration-200 hover:scale-105    '>Enviar informacion</button> 
        
        </form> 

        {orderId && (<p className='text-[20px] text-gray-600 '>Su id fue realizado con éxito!</p>)}

    </div>
  )
}

export default CartForm