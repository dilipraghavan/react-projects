import './Navbar.style.css';
import {Link} from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {

    const {theme, setTheme} = useContext(ThemeContext);
    const btnText = theme === 'light' ? 'Dark' : 'Light';
    const handleThemeClick = (e) => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <nav className={`nav pd ${theme}`}>
                <Link to={'/'} className={ `googl-link ${theme}` }  >
                    Goggl <CiSearch className='search-icon'/>
                </Link>
                <button className={`btn ${theme}`} onClick={handleThemeClick}>{btnText}</button>
            </nav>
        </>
    )
}

export default Navbar;