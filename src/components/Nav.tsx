import React, {useContext} from "react";
import {MovieContext} from "../context/MovieContext";

// @ts-ignore
const Nav = (props) => {
    // @ts-ignore
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <nav>
            <h3 className='nav-style'>Karmit</h3>
            <p className='nav-style'>List of Movies: {movies.length} </p>
        </nav>)
}

export default Nav
