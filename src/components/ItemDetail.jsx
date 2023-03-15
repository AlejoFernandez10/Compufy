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
       <div key={prod.id}>
       <div className="relative mx-auto max-w-screen-xl px-4 py-8 mt-[50px]">
         <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
           <div className="grid grid-cols-2 gap-4 md:grid-cols-1 mt-[50px]">
             <img
               alt="Les Paul"
               srcSet={prod.img}
               className="aspect-square w-full rounded-xl object-contain h-[80%]"
             />
     
             <div className="grid grid-cols-2 gap-4 ">
               <img
                 alt="Les Paul"
                 srcSet={prod.img}
                 className="aspect-square w-full rounded-xl object-cover cursor-pointer"
               />
     
               <img
                 alt="Les Paul"
                 srcSet={prod.img}
                 className="aspect-square w-full rounded-xl object-cover cursor-pointer"
               />
     
               <img
                 alt="Les Paul"
                 srcSet={prod.img}
                 className="aspect-square w-full rounded-xl object-cover cursor-pointer"
               />
     
               <img
                 alt="Les Paul"
                 srcSet={prod.img}
                 className="aspect-square w-full rounded-xl object-cover cursor-pointer"
               />
             </div>
           </div>
     
           <div className="sticky top-0">
             <strong
               className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
             >
              Details
             </strong>
     
             <div className="mt-8 flex justify-between">
               <div className="max-w-[35ch] space-y-2">
                 <h1 className="text-xl font-bold sm:text-1xl">
                   {prod.title}
                 </h1>
     
                 <p className="text-sm">Highest Rated Product</p>
     
                 <div className="-ml-0.5 flex">
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-yellow-400"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
     
                   <svg
                     className="h-5 w-5 text-gray-200"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                     />
                   </svg>
                 </div>
               </div>
     
               <p className="text-lg font-bold">{prod.price}</p>
             </div>
     
             <div className="mt-4">
               <div className="prose max-w-none">
                 <p className='text-sm'>
                   {prod.descrip}
                 </p>
                 
               </div>
      
               <form className="mt-8">
               <fieldset>
                 <legend className="mb-1 text-sm font-medium">Color</legend>
     
                 <div className="flex flex-wrap gap-1">
                   <label htmlFor="color_tt" className="cursor-pointer">
                     <input
                       type="radio"
                       name="color"
                       id="color_tt"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       Red
                     </span>
                   </label>
     
                   <label htmlFor="color_fr" className="cursor-pointer">
                     <input
                       type="radio"
                       name="color"
                       id="color_fr"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       Blue
                     </span>
                   </label>
     
                   <label htmlFor="color_cb" className="cursor-pointer">
                     <input
                       type="radio"
                       name="color"
                       id="color_cb"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       Green
                     </span>
                   </label>
                 </div>
               </fieldset>
     
               <fieldset className="mt-4">
                 <legend className="mb-1 text-sm font-medium">Size</legend>
     
                 <div className="flex flex-wrap gap-1">
                   <label htmlFor="size_xs" className="cursor-pointer">
                     <input
                       type="radio"
                       name="size"
                       id="size_xs"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       XS
                     </span>
                   </label>
     
                   <label htmlFor="size_s" className="cursor-pointer">
                     <input
                       type="radio"
                       name="size"
                       id="size_s"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       S
                     </span>
                   </label>
     
                   <label htmlFor="size_m" className="cursor-pointer">
                     <input
                       type="radio"
                       name="size"
                       id="size_m"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       M
                     </span>
                   </label>
     
                   <label htmlFor="size_l" className="cursor-pointer">
                     <input
                       type="radio"
                       name="size"
                       id="size_l"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       L
                     </span>
                   </label>
     
                   <label htmlFor="size_xl" className="cursor-pointer">
                     <input
                       type="radio"
                       name="size"
                       id="size_xl"
                       className="peer sr-only"
                     />
     
                     <span
                       className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-[#0CC0DF] peer-checked:text-white"
                     >
                       XL
                     </span>
                   </label>
                 </div>
               </fieldset>
     
               <div className="mt-8 flex gap-4">
                 <div> 

                      <ItemCount
                      id={prod.id}
                      title={prod.title}
                      img={prod.img}
                      price={prod.price}

                      />

                 </div>

                  
                    
                    
                 
               </div>
             </form>
              
               
             </div>
             

              
             
           </div>
         </div>
       </div>
     </div>
    ))}

    </>  
  )
}

export default ItemDetail