import { createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchURI='https://google-search72.p.rapidapi.com/search?query=';
    const imageSearchURI='https://google-search72.p.rapidapi.com/imagesearch?query=';

    const handleWebSearch = async() => {
        if(searchTerm === '')
            return;
        
        setLoading(prev => true);
        const response = await fetch(`${searchURI}${searchTerm}`, {
            method:'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
            }
        });
        const data = await response.json();
        console.log(data)
        setSearchResults(prev => data.items);
        setLoading(prev => false);
    };

    const handleImageSearch = async() => {
        if(searchTerm === '')
            return;
        setLoading(prev => true);
        const response = await fetch(`${imageSearchURI}${searchTerm}`, {
            method:'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
            }
        });
        const data = await response.json();
        console.log(data)
        setSearchResults(prev => data.items);
        setLoading(prev => false);
    };

    return (
        <SearchContext.Provider value={{
                searchTerm,
                setSearchTerm,
                searchResults,
                setSearchResults,
                loading,
                setLoading,
                handleWebSearch,
                handleImageSearch
            }}>
            {children}
        </SearchContext.Provider>
    );
}