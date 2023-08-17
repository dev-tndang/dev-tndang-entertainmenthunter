import React from "react";

const MovieCard = ({ movie }) => {
    const movieYear = movie.Year.replace("–", "");

    return (
        <div className="movie">
            <div className="spacer">
            </div>
            <div>
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title} ({movieYear})</h3>
            </div>
        </div>
    );
}

export default MovieCard;