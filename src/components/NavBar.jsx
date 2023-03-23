import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import CartWidget from './cartComponents/CartWidget'


const NavBar = () => {
  
  return (
    <>
    <nav className='nav h-[70px] ' > 
    <div className="nav-section ">

      <p className="logo p-0 mt-[10px] " ><Link to={"/"} className="p-0" style={{textDecoration:"none"}}><span className='text-[35px] text-[#0CC0DF]  font-sebmibold self-start' >Compufy</span></Link></p>

    </div>
    <div className="nav-section flex mt-[10px] " >

      <Link to={`/catalogo`} style={{textDecoration:"none"}}  className='text-black text-[21px] mt-[12px]  '>Catalogo</Link>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black text-[20px] mt-[5px] " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu ">
            <li><Link to={`/categoria/${`procesador`}`} className="dropdown-item hover:text-[#0CC0DF] ">Procesadores</Link></li>
            <li><Link to={`/categoria/${`motherboard`}`} className="dropdown-item hover:text-[#0CC0DF] ">Motherboards</Link></li>
            
            <li><Link to={`/categoria/${`ram`}`} className="dropdown-item hover:text-[#0CC0DF] ">Memoria Ram</Link></li>
          </ul>
        </div>

    </div>
    <div className="nav-section">    <CartWidget />

    </div>
    </nav>
    </>
  )
}

export default NavBar