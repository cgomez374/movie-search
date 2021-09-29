import React from 'react';
import Styles from './MovieDetails.module.css';
import {useLocation } from 'react-router';
import NotFound from '../NotFound/NotFound';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
    try{
        const location = useLocation();
        const {movie} = location.state;

        // console.log(movie)

        return (
            <div className={Styles.detailsPage} >
                <Link to='/' >
                    <button className={Styles.backButton}>back</button>
                </Link>
                <div className={Styles.details}>
                    <img
                        src={ movie.poster_path && "http://image.tmdb.org/t/p/w185/" + movie.poster_path}
                        alt="movie poster"
                        />
                    <div className={Styles.text}>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <p>popularity: {movie.popularity}</p>

                    </div>
                </div>
            </div>
        )   
    }
    catch(e){
        return(
            <>
                <NotFound />
            </>
        )
    }
}

export default MovieDetails;
