import React from 'react'
import ItemDetail from './ItemDetail'
import data from '../../data.json'

import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
  
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    const getProductos = new Promise(resolve =>{

      setTimeout(()=>{
        resolve(data)
      }, 1000)
          
          
    });

    getProductos.then(res =>setProductos(res)) 

  }, []) 
  
  return (
    <>

      <ItemDetail prods={productos}/>
    
    </>
  )
}

export default ItemDetailContainer