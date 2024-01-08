import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../Helpers/axios";
import "./Detail.css";
import Navbar from "../../components/Navbar/Navbar";

const Detail = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    console.log(id);
    instance
      .get(
        `/movie/${id}?api_key=${process.env.REACT_APP_API_kEY}&language=en-US`
      )
      .then((Result) => {
        setmovie(Result.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="detail_page">
        <div className="container">
          <img
            alt="Poster"
            src={`https://images.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          ></img>
          <div className="details">
            <h1>{movie?.original_title}</h1>
            <br />
            <p>{movie?.overview}</p>
            <br />
            <div className="description_contollers">
              <div className="watch_now">
                <span class="material-symbols-outlined play_icon">
                  play_arrow
                </span>
                <p>Watch Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
