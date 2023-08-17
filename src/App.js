import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";
import EHLogo from "./eh_logo.png";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b7ef72a5";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data);
    }

    useEffect(() => {
        searchMovie("online");
    }, [])

    return (
        <div className="app">
            <img
                src={EHLogo}
                alt="Entertainment Hunter Logo"
                width="420px"
                onClick={() => {window.location.reload()}}
            />

            <div className="search">
                <input
                    placeholder="Search by Title..."
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {searchMovie(searchTerm)}}
                />
            </div>

            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;