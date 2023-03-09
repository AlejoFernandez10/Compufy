import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';

import productos from '../../data.json'


const ItemListContainer = () => {



  const [data, setData] = useState([])

  const { category } = useParams()

  useEffect(()=>{
    const getProductos = new Promise(resolve =>{

      setTimeout(()=>{
        resolve(productos)
      }, 1000)
          
          
    });
    if(category){
      
      getProductos.then(res => setData(res.filter(prod => prod.category == category))) 
    }else{
      getProductos.then(res => setData(res))
    }


  }, [category]) 


  return (
    <div>

      <ItemList data={data} />
      
    </div>
  )
}

export default ItemListContainer