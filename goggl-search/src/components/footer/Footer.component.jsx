import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Footer.style.css';

function Footer() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`footer ${theme}`}>&#169; Goggl Search</div>
  )
}

export default Footer;