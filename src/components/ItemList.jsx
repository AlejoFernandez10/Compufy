import React from 'react'
import Item from './Item'


const ItemList = ({data }) => {


  return (
    <>

    <div style={{minHeight:"80vh",width:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>

      <div classNameName="center-div" style={{ marginTop:"100px",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",maxWidth:"1200px", gap:"10px" }}>
      {data.map((prod)=>(

            <Item 
              id={prod.id}
              img={prod.img}
              title={prod.title}              
              category={prod.category}
              price={prod.price}
            />

            ))}
      </div>
      
    </div>
    </>
  )
}

export default ItemList