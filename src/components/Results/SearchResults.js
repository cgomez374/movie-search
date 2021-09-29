import React from 'react';

import './SearchResults.css';

function SearchResults({title, overview, poster}) {
    if(poster !== null){
        poster = 'http://image.tmdb.org/t/p/w185/' + poster;
    }
    else {
        poster = './filler-image.jpg';
    }
 
    return(
        <section className='display-results'>
            <div className="img-container">
                <img src={poster} alt="poster"/>
            </div>
        </section>
    )
}

export default SearchResults