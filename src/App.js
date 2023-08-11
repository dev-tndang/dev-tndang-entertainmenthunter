import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b7ef72a5";

const App = () => {
    const searchMovie = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovie("Spiderman");
    }, [])

    return (
        <div className="app">
            <h1>Movie Base</h1>
            <div className="search">
                <input
                    placeholder="Search for a Movie..."
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}

export default App;