import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';


export const SearchPage = () => {
    
    const navigate = useNavigate(); 
    const location = useLocation();     
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName( q );
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;


    const {
        searchText,
        onInputChange
    } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if ( searchText.trim().length <= 1 ) return;
        console.log("asds")
        navigate(`?q=${searchText}`);

    };

    return (
        <>
            <h1>Search Page</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form action="submit" onSubmit={onSearchSubmit} aria-label='form'>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off" 
                            value={searchText}
                            onChange={ onInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search a hero
                    </div>
                    <div 
                        aria-label='alert-error'
                        className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}
                    >
                        No hero with { q }
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
