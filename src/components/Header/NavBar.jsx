import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import CartWidget from './CartWidget';
import { CartContext } from '../Checkout/CartContex';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const cartCount = cart.reduce((acc, item) => acc + item.cantidad, 0)

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li><Link className='navbar__link' to={"/"}>Inicio</Link></li>
                <li><Link className='navbar__link' to={"/nosotros"}>Nosotros</Link></li>
                <li><Link className='navbar__link' to={"/contacto"}>Contacto</Link></li>
            </ul>

            <div className='dashboard'>
                <ul className='navbar__list'>
                    <li>
                        <Link className='navbar__link navbar__link--cart' to="/checkout">
                            <CartWidget cartCount={cartCount} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar