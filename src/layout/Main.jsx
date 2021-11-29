import React from 'react'
import { MovieList } from '../components/MovieList'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

export class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=e6e2e136&s=matrix')
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`https://www.omdbapi.com/?apikey=e6e2e136&s=${str}`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    movies.length ? (
                        <MovieList movies={this.state.movies}/>
                    ) : <Preloader />
                }

            </main>
        )
    }

}