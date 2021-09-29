import React, {useState} from 'react'
import Styles from './Search.module.css';
import {getMovies} from '../../contexts/api/getMovies';
import MovieList from '../MovieList.js/MovieList';

function Search() {
    //create state to save movies data and setdata
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [msg, setMsg] = useState(false);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getResults = (e) => {
        e.preventDefault();
        if(movies.length > 0){
            setMovies([]);
        }

        if(search !== ''){
            setMsg('Loading..');
            getMovies(search, setMovies, setMsg);
            setSearch('');
        }
        else{
            setMsg('Please Enter Movie Title');
        }
    }
    return(
      <div className={Styles.searchPage}>
        <form onSubmit={getResults} className={Styles.searchForm}>
          <input 
            type="text"
            placeholder='Search Movies'
            onChange={updateSearch}
            value={search}
          />
          <button>Submit</button>
        </form>
        <section className={Styles.movieDisplay}>
          <MovieList movies={movies} error={msg} />
        </section>
      </div>
    )
}

export default Search