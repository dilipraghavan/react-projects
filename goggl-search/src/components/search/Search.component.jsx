import { useContext } from 'react';
import './Search.style.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SearchContext } from '../../contexts/SearchContext';

const Search = ()=>{
    const {theme} = useContext(ThemeContext);
    const {searchTerm, setSearchTerm, handleWebSearch, handleImageSearch, searchResults, setSearchResults} = useContext(SearchContext);

    const handleSearchInputChange = (e) => setSearchTerm(prev=>e.target.value);

    const handleClear = () => {
        setSearchTerm(prev => '');
        setSearchResults(prev => []);
    }

    return (
        <div className={`search-container ${theme}`}>
            <input type='Search' className={`search-input ${theme}`}  value={searchTerm} onChange={ handleSearchInputChange }/>
            <span className='ml-10 cursor' onClick={() => handleWebSearch()}>Web  </span>
            <span className='ml-10 cursor' onClick={() => handleImageSearch()}>Image  </span>
            { searchResults.length > 0 && <span className='ml-10 cursor' onClick={() => handleClear()}>Clear</span> }
        </div>
    )
}

export default Search;