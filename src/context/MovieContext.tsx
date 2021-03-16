import React, {createContext, useState} from 'react'

// @ts-ignore
export const MovieContext = createContext();

export const MovieProvider = (props: any) => {
    const [movies, setMovies] = useState([
        {name: 'Harry Potter', price: '$10', id: 1234},
        {name: 'Game of Thrones', price: '$11', id: 2345},
        {name: 'Inception', price: '$12', id: 3456}
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

/*
Create a seperate context file and pass it on to all the components.
Use `useContext` in each component that wants to access it...
 */
