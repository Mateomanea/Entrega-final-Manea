import React, { useContext }from 'react'
import { CartContext } from './CartContex';

const Checkout = () => {
  const { cart, removerItem } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>
  }

  const precioTotal = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0 );

  return (
    <div className="checkout">
      <h2 className='checkout__subtitle'>Carrito de Compras</h2>
      <div className="checkout__itemContainer">
        {cart.length === 0 ? (
            <p className='checkout__carritoVacio'>El carrito está vacío.</p>
        ) : (
              cart.map(item => (
                  <li key={item.id} className="checkout__item">
                      <img  className="checkout__img"
                        src={item.image} 
                        alt={item.name}  
                      />

                      <div className="checkout__details">
                            <h3 className='checkout__title'>{item.name}</h3>
                            <p className='checkout__amount'>Cantidad: {item.cantidad}</p>
                            <p className='checkout__price'>Precio: ${item.price}</p>
                            
                            <button className='checkout__btnRemove' onClick={() => removerItem(item.id)}>
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                      </div>

                      <p className='checkout__priceAmount'>
                        Total: ${(item.price * item.cantidad).toFixed(3)}
                      </p>
                  </li>
                ))
            )}
            <h3 className='checkout__priceTotal'>
              Total: ${precioTotal.toFixed(3)}
            </h3>

            <div className="checkout__btn">
              <button className='btn'>
                Comprar ahora
              </button>
            </div>
      </div>      
    </div>
  )
}

export default Checkout;