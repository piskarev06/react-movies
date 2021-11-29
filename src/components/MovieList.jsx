import React from 'react'
import { Movie } from './Movie'

export function MovieList({movies}) {
    return (
        <div className="movies">
            {movies.map(el => (
                <Movie key={el.imdbID} {...el}/>
            ))}
        </div>
    )
}