import { Link } from 'react-router-dom';
import { useState } from 'react'
import CartWidget from './CartWidget';
import Search from './Search'

const Navbar = () => {

    const [searchActive, setSearchActive] = useState(false);

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
                            Buscar
                            <i className={`navbar__link--icon fa-solid 
                            ${searchActive ? 'fa-xmark' : 'fa-magnifying-glass'}`}
                            >
                            </i>
                        </Link>
                        {searchActive && <Search />}
                    </li>
                    <li><Link className='navbar__link' to="#">Login</Link></li>
                    <li>
                        <Link className='navbar__link navbar__link--cart' to="#">
                            <CartWidget />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar