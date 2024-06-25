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
      <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
        ) : (
              cart.map(item => (
                  <div key={item.id} className="checkout__item">
                      <img  className="checkout__img"
                        src={item.image} 
                        alt={item.name}  
                      />

                      <div className="checkout__details">
                            <h3 className='checkout__title'>{item.name}</h3>
                            <p className='checkout__amount'>Cantidad: {item.cantidad}</p>
                            <p className='checkout__price'>Precio: ${item.price}</p>
                            <p className='checkout__priceAmout'>
                              Total: ${item.price * item.cantidad}
                            </p>
                            <button onClick={() => removerItem(item.id)}>
                              Quitar
                            </button>
                      </div>
                  </div>
                ))
            )}
            <h3 className='checkout__priceTotal'>Precio Total: ${precioTotal}</h3>
    </div>
  )
}

export default Checkout;