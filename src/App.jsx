
import { CartContextProvider } from './context/CartContextProvider';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Bienvenidos from './components/Bienvenidos';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';



import Cart from './components/Cart';

function App() {

  

  return (

    <CartContextProvider>

    <BrowserRouter>

      <div className='App'>
        <NavBar />

        <Routes>

        <Route exact path='/' element={<Bienvenidos />} /> 

        <Route exact path='/catalogo' element={<ItemListContainer /> } /> 

        <Route exact path="/categoria/:category" element={<ItemListContainer />} />

        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        <Route exact path="/cart" element={<Cart />} />

        </Routes>

      </div>

    </BrowserRouter>

    </CartContextProvider> 
  )
}

export default App
