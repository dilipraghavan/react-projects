import { useContext } from 'react';
import './App.css';
import Footer from './components/footer/Footer.component';
import Navbar from './components/navbar/Navbar.component';
import { ThemeContext } from './contexts/ThemeContext';
import Search from './components/search/Search.component';
import Result from './components/result/Result.component';

function App() {
    const {theme} = useContext(ThemeContext);
    return (
      <div className={`app ${theme}`}>
        <Navbar />
        <Search />
        <Result />
        <Footer />
      </div>
    );
}

export default App;
