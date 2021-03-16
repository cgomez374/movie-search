import React, {useState} from 'react'
import './Search.css';

import SearchResults from '../Results/SearchResults';
import AlertMsg from '../Alert/AlertMsg';

function Search() {
    //create state to save movies data and setdata
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [msg, setMsg] = useState('');

    //function that will make api call
    const getMovies = async (query) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2981946d7a75ea943692c98fb27ce426&language=en-US&query=${query}`);
        var data = await response.json();
        if(data !== null){
            setMovies(data.results);
            setMsg('');
        }
        else{
         setMsg('Error! Try Again!');
        }
    }

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
            getMovies(search);
            setSearch('');
        }
        else{
            setMsg('Please Enter Movie Title');
        }
    }
    return(
        <div className="App">
        <form onSubmit={getResults} className='searchForm'>
          <input 
            type="text"
            placeholder='Search Movies'
            onChange={updateSearch}
            value={search}
          />
          <button>Submit</button>
        </form>
        <section className='movie-display'>
          {/* {will display data on seperate component} */}
          {msg !== '' && <AlertMsg msg={msg}/>}
          {movies.length > 0 && movies.map((movie) => {
            const {id, title, overview, poster_path} = movie;
            return(
              <SearchResults 
                key={id}
                title={title}
                overview={overview}
                poster={poster_path}
              />
            )
          })}
        </section>
      </div>
    )
}

export default Search