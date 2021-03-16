import React from "react";

// @ts-ignore
const Movie = (props) => {

    const movie = props.movie

    return (
        <div>
            <h3 key={movie.id}>{movie.name}</h3>
            <p>Price: {movie.price}</p>
        </div>)
}

export default Movie
