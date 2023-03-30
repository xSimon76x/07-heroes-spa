import { useForm } from '../hooks/useForm'


export const SearchPage = () => {
    

    const {
        searchText,
        onInputChange
    } = useForm({
        searchText: ''
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if ( searchText.trim().length <= 1 ) return;

        console.log(searchText)

    };

    return (
        <>
            <h1>Search Page</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form action="submit" onSubmit={onSearchSubmit}>
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

                    <div className="alert alert-primary">
                        Search a hero
                    </div>
                    <div className="alert alert-danger">
                        No hero with 
                    </div>
                </div>
            </div>
        </>
    )
}
