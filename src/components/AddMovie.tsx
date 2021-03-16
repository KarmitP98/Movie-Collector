import React, {useContext, useState} from "react";
import {MovieContext} from "../context/MovieContext";

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    //@ts-ignore
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e: any) => {
        setName(e.target.value);
    }
    const updatePrice = (e: any) => {
        setPrice(e.target.value);
    }

    const addMovie = (e:any) => {
        e.preventDefault()
        setMovies((currentMovies: any) => {
            return [...currentMovies, {name: name, price: price, id: Math.random() * 1000}];
        })
        setName('');
        setPrice('');
    }

    return (
        <form>
            <input type="text" name={'name'} value={name} onChange={updateName}/>
            <input type="text" name={'price'} value={price} onChange={updatePrice}/>
            <button onClick={addMovie}>Submit</button>
        </form>
    )
}

export default AddMovie
