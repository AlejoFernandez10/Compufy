
import { CartContextProvider } from './context/CartContextProvider';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Bienvenidos from './components/Bienvenidos';
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



import Cart from './components/cartComponents/Cart';

import Document from './components/Document';

function App() {

  

  return (

    <CartContextProvider>

    <BrowserRouter>

      <div className='App'>
        <NavBar />

        <Routes>

        <Route exact path='/' element={<Bienvenidos />} /> 

        <Route exact path='/catalogo' element={<ItemListContainer /> } /> 

        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />

        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        <Route exact path="/cart" element={<Cart />} />

        </Routes>

        
      </div>
      <Document />
    </BrowserRouter>

    </CartContextProvider> 
  )
}

export default App
