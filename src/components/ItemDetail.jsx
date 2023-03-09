import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ prods }) => {

   const { id } = useParams();  
  
  const prodsFilter = prods.filter((prod) => prod.id == id )

  console.log(prodsFilter); 
  
  return (
    <>
    {prodsFilter?.map((prod)=>(
      <div key={prod.id} style={{ display:"flex",justifyContent:"center", marginTop:"100px"}}> 
            <div className="card"  style={{maxWidth:"400px" }}>
              <img srcSet={prod.img} height="200px" style={{width:"200px", margin:"auto"}}  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.descrip}</p>
              </div>
              <ul className="list-group list-group-flush">
              
                <li className="list-group-item">Price: {prod.price}</li>
                
              </ul>
              <div className="card-body">
                <ItemCount />           <button className='btn btn-primary'><Link to={`/catalogo`} className='text-white '>Volver</Link>  </button>                
                <button className="btn btn-primary">Add to cart</button> 
              </div>
          </div>
      </div>
    ))}

    </>  
  )
}

export default ItemDetail