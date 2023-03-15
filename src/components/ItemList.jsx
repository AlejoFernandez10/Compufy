import React from 'react'
import Item from './Item'


const ItemList = ({data }) => {


  return (
    <>

    <div className='min-h-[80vh] w-full flex justify-center items-center'>
      <div className="center-div mt-[100px] flex flex-wrap justify-center items-center max-w-[1200px] gap-3" >
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