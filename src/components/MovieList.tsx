import React, {useContext} from "react";
import {MovieContext} from "../context/MovieContext";
import Movie from "./Movie";

// @ts-ignore
const MovieList = () => {
    // @ts-ignore
    const [movies, setMovies] = useContext(MovieContext);
    console.log(movies)
    return (
        <div>
            {movies.map((movie: any) =>
                (<Movie movie={movie} key={movie.id}/> ))}
        </div>)
}

export default MovieList
