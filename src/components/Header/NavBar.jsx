import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import CartWidget from './CartWidget';
import Search from './Search'
import { CartContext } from '../Checkout/CartContex';

const Navbar = () => {

    const [searchActive, setSearchActive] = useState(false);
    const { cart } = useContext(CartContext);
    const cartCount = cart.reduce((acc, item) => acc + item.cantidad, 0)

    const handleSearchToggle = () => {
        setSearchActive(!searchActive);
    }

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
                        <Link className='navbar__link' to="#" onClick={handleSearchToggle}>
                            <i className={`navbar__link--icon fa-solid 
                            ${searchActive ? 'fa-xmark' : 'fa-magnifying-glass'}`}
                            >
                            </i>
                        </Link>
                        {searchActive && <Search />}
                    </li>

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