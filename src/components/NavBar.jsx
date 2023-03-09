import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <>
    <nav className='nav' style={{height:"70px"}}> 
    <div className="nav-section ">

      <p className="logo" style={{padding:"0",marginTop:"10px"}}><Link to={"/"} style={{textDecoration:"none",padding:"0"}}><span style={{fontSize: "35px",color:"#0CC0DF",fontWeight:"600",alignSelf:"flex-start"}} >Compufy</span></Link></p>

    </div>
    <div className="nav-section" style={{display:"flex",marginTop:"10px"}}>

      <Link to={`/catalogo`} style={{marginTop:"8px",textDecoration:"none"}} className='text-dark fs-5'>Catalogo</Link>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu ">
            <li><Link to={`/categoria/${`Procesador`}`} className="dropdown-item ">Procesadores</Link></li>
            <li><Link to={`/categoria/${`Motherboard`}`} className="dropdown-item ">Motherboards</Link></li>
            
            <li><Link to={`/categoria/${`Ram`}`} className="dropdown-item ">Memoria Ram</Link></li>
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