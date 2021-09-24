import React from 'react';
import './NavStyle.css';
function Navigation(){
    return(
        <nav className="nav">
            <h1>Movies</h1>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Search</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
            </ul>
        </nav>
    )
}

export default Navigation