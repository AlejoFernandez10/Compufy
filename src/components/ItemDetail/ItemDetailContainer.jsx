import React from 'react'
import ItemDetail from './ItemDetail'


import { useState, useEffect } from 'react'

import {collection, getDocs, getFirestore} from 'firebase/firestore'



const ItemDetailContainer = () => {
  
  const [data, setData] = useState([])

  
  useEffect(()=>{
    
    const db = getFirestore()
    const compsCollection = collection(db, "componentes");
    
    getDocs(compsCollection).then((snapshot) => {
      
      const componentes = snapshot.docs.map((componente)=> ({
        ...componente.data(),
        id: componente.id,
      }))

      setData(componentes)
    })
  }, [])
  
  
  
  return (
    <>

      <ItemDetail prods={data}/>
    
    </>
  )
}

export default ItemDetailContainer