import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <Link className='header__title' to={"/"}>
                        LabTech
                </Link>

                <NavBar/>
            </div>
        </header>
    )

};

export default Header