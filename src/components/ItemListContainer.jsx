import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';

import productos from '../../data.json'
import Loader from './Loader';

const ItemListContainer = () => {


  const [loader, setLoader]= useState(true);

  const [data, setData] = useState([])

  const { category } = useParams()


  useEffect(()=>{
    const getProductos = new Promise(resolve =>{

      
      setTimeout(()=>{

        setLoader(false)
        resolve(productos)

      }, 2000)          
       
    });

    
    if(category){
      
      getProductos.then(res => setData(res.filter(prod => prod.category == category))) 
    }else{
      getProductos.then(res => setData(res))
      }


  }, [category]) 


  


  return (

    
    <div>

      {loader === true ? <Loader />  : <ItemList data={data} /> }
      
    </div>
  )
}

export default ItemListContainer