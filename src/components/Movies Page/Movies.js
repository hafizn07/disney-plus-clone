import React from "react";
import "./Movies.css";
import { selectMovies } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);
  console.log(movies);

  return (
    <div className="movies-container">
      <h4>Recommended for You</h4>

      <div className="content_movies">
        {movies &&
          movies.map((movie) => (
            <div className="content_wrap" key={movie.id}>
              <img src={movie.cardImg} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Movies;
