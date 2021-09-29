import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../contexts/api/getPopularMovies';
import MovieList from '../MovieList.js/MovieList';
import Styles from './PopularMovies.module.css';

const PopularMovies = () => {
    //state for movies
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getPopularMovies(setMovies, setError);
    }, []);

    return (
        <div className={Styles.moviesSection} >
            <h2>popular movies</h2>
            <div className={Styles.moviesList}>
                <MovieList movies={movies} error={error}  />
            </div>
        </div>
    )
}

export default PopularMovies;
