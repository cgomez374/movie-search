import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../contexts/api/getPopularMovies';
import AlertMsg from '../Alert/AlertMsg';
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
                {!error && movies.results ?
                    movies.results.length > 0 &&
                        movies.results.map(movie => {
                            return (
                              <img
                                src={ movie.poster_path && "http://image.tmdb.org/t/p/w185/" + movie.poster_path}
                                alt="movie poster"
                              />
                            );
                        })
                : <AlertMsg />
                }
            </div>
        </div>
    )
}

export default PopularMovies;
