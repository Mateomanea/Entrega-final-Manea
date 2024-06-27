import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import Checkout  from './components/Checkout/Checkout';
import { CartProvider  } from './components/Checkout/CartContex';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

//Sass
import './sass/index.scss';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  );

}

export default App  
