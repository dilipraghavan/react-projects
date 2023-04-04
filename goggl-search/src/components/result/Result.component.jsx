import { useContext } from 'react';
import './Result.style.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SearchContext } from '../../contexts/SearchContext';
import {ImSpinner} from 'react-icons/im'

const Result = () => {
    const {theme} = useContext(ThemeContext);
    const {searchResults, loading} = useContext(SearchContext);
    return (
    <div className={`result-container ${theme}`}>
        {
            loading ? <ImSpinner /> : (
                searchResults.map((result, index) => {
                    return (
                        <div key={index} className={`result ${theme}`}>
                            {
                                <>
                                    {result.link && <a href={`${result.link}`} rel='noopener noreferrer' target='_blank'>{result.link.length < 30 ? result.link : result.link.slice(0,30)  }</a>}
                                    {result?.originalImageUrl && <img src={result.originalImageUrl} loading='lazy' className='img' />}
                                </>
                            }
                            <p>{result.title}</p>
                        </div>
                    );
                })
            )
        }
    </div>
    )
}

export default Result;