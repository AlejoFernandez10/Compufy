import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const Document = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(()=>{
        const db = getFirestore();

        const item = doc(db, "componentes", `${id}`);
        
        getDoc(item).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data();
                setProduct(docs)
                console.log(docs)
            }
        })

    },[])



  return (
    <div>

        {
            
            <div key={product.id}>
            <h5>{product.nombre}</h5>
            <p>{product.descripcion}</p>
            <span>{product.categoria}</span>
            <span>{product.precio}</span>
            
            </div>
        }
    </div>
  )
}

export default Document