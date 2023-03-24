import React from 'react'
import { useContext,useState } from 'react'
import { CartContext } from '../../context/CartContextProvider';


import withReactContent from 'sweetalert2-react-content';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'


const MySwal = withReactContent(swal)





const ItemCount = ({id, imagen ,nombre,  precio , categoria}) => {

  

    const [cart, setCart] = useContext(CartContext);

    

    const [count,setCount] = useState(1);  
    

    const sumarCant = ()=>{
      if(count < 5){
        setCount(count + 1)
      }
    }
    const restarCant = ()=>{
      if(count === 0){
        setCount(0)
      }else{
        setCount(count - 1)
      }
      
    }


    const addToCart = ()=>{

      setCart((currentItems)=>{
        const itemExists = currentItems.find( (item) => item.id === id)

        if(itemExists){
          return currentItems.map((item)=>{

            if(item.id === id ) {
              return {...item, cantidad: item.cantidad + count}
            }
            else{
              return item
            }

          });
        
        }else{
          return [...currentItems, {id, cantidad: count, precio , imagen ,nombre, categoria }]
        }
      })
     
    }    
    

    //ALERTA PRDUCTO AGREGADO
    const prodAgregado= ()=>{
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado!',
        showConfirmButton: false,
        timer: 900
      })
    }


  
  return (
    <div  className='mt-[4px] flex h-full w-full justify-center items-center'>
      <div className='w-[120px] h-[40px]  bg-[#eee] flex justify-evenly items-center rounded-[10px] ml-[15px] mr-[15px]'>
        <span className='pl-[15px] pr-[15px] cursor-pointer 'onClick={restarCant}>-</span>
        <span>{count}</span>
        <span className='pl-[15px] pr-[15px] cursor-pointer 'onClick={sumarCant}>+</span>
        
      </div>

      <a>

          <div onClick={() => addToCart() & prodAgregado() }  className="block text-[14px] rounded-[10px] cursor-pointer  border-[1px] border-[#444] px-5 py-[11px] text-xs font-medium text-[#444] transition duration-200 hover:bg-[#0CC0DF] hover:border-[#0CC0DF] hover:text-white">
              Añadir 
          </div>

      </a>
    </div>
  )
}

export default ItemCount