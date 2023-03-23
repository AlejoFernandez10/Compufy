import React from 'react'

import {useState, useEffect} from 'react';

import {collection, doc, getDocs, getFirestore} from 'firebase/firestore'



const Collections = () => {


    const [products, setProducts] = useState([])

    useEffect(()=>{

        const db = getFirestore();

        const itemsCollection = collection(db, "componentes");

        getDocs(itemsCollection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc)=>doc.data(),doc.id)
            setProducts(docs)
        })
        


    }, [])


  return (
    <div>
        <h1>Hola</h1>

        {products.map((prod)=>(
            <div >
                <h4>{prod.nombre}</h4>
                <img srcSet={prod.imagen} alt="" className='h-[120px] w-[100px]' />
                <span>{prod.precio}</span>
            </div>
        ))}

    </div>
  )
}

export default Collections