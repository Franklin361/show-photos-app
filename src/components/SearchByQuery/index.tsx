import { Button } from '../';
import './style.scss'
import { useSearchParams } from 'react-router-dom';

export const SearchByQuery = ({query}:{query:string}) => {
    const [_, setSearchParams]= useSearchParams();
    const handleClick = () => setSearchParams({});
    return (
        <section className='section-query-search'>
            <p className='result'>Results with: <b>{query}</b> </p>
            <Button 
                className='btn-clear-search' 
                label="Clear search" 
                icon='close' 
                iconClassName='close-icon' 
                onClick={handleClick}
            />
        </section>
    )
}
