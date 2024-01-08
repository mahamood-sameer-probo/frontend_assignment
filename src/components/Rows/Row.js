import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import instance from "../../Helpers/axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setmovies] = useState(null);
  useEffect(() => {
    instance.get(fetchURL).then((res) => {
        console.log(res)
      setmovies(res.data.results);
    });
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movies_list">
        {movies?.map((movie) => {
          return (
            <Link to={`/${movie?.id}`}>
              <img
                className="poster"
                alt="poster"
                src={`https://images.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
