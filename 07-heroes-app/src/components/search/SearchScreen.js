import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [formValues, handleInputChange, reset] = useForm({
        searchText:q
    });

    const {searchText} = formValues;

    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    //const heroesFiltered = getHeroesByName(searchText);
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        ></input>
                        <button
                            type="submit"
                            className="btn btn-block m-1 btn-outline-primary"    
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                { 
                    (q === '') && 
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                }

                { 
                    (q !== '' && heroesFiltered.length === 0) && 
                    <div className="alert alert-danger">
                        There is no a hero with {q}
                    </div>
                }

                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
