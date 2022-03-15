import React from "react";
import AlertMsg from "../Alert/AlertMsg";
import { Link } from "react-router-dom";
import Styles from "./MovieList.module.css";

const MovieList = ({ movies, error }) => {
  return (
    <div className={Styles.moviesList}>
      {!error && movies.results ? (
        movies.results.length > 0 &&
        movies.results.map((movie) => {
          return (
            <Link
              to={{
                pathname: `${movie.id}`,
                state: {
                  movie: movie,
                },
              }}
              key={movie.id}
            >
              <img
                src={
                  movie.poster_path &&
                  "http://image.tmdb.org/t/p/w185/" + movie.poster_path
                }
                alt="movie poster"
              />
            </Link>
          );
        })
      ) : (
        <AlertMsg />
      )}
    </div>
  );
};

export default MovieList;
