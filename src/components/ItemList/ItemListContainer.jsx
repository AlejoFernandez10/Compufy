import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {collection, getDocs, getFirestore} from 'firebase/firestore'


import ItemList from './ItemList';

import Loader from '../Loader';




const ItemListContainer = () => {


  const [loader, setLoader]= useState(true);

  const [data, setData] = useState([])

  const { categoria } = useParams()


  useEffect(()=>{
    
    const db = getFirestore()
    const itemsCollection = collection(db, "componentes");
    
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(),
        id: doc.id
      }))
      setData(docs)

      setLoader(false)   
    })

    


  }, []) 


  const categoryFilter = data.filter((componente) => componente.categoria === categoria)



  if(loader === true){

    return(
      <div>
        <Loader />
      </div>
    )

  }else{
    return(

    <div className='bg-gray-200 flex flex-col justify-center items-center'>

      <div className='max-w-[1000px] w-full '>

      <h2 className='mt-[100px] text-center text-[35px] pl-[30px]  bg-gradient-to-r from-[#13668d]  to-[#0befff] bg-clip-text text-transparent '>Catálogo</h2>
      </div>


      {categoria ? <ItemList data={categoryFilter} /> : <ItemList data={data} />}
      
      
    </div>

    )
  }

}

export default ItemListContainer