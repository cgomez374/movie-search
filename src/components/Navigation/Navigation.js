import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';
function Navigation(){
    return(
        <nav className="nav">
            <h1>Movies</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/search'>search</Link>
                </li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
            </ul>
        </nav>
    )
}

export default Navigation