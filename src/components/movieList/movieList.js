import React, { useState, useEffect } from "react";
import Card from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    getData()
}, [])

useEffect(() => {
    getData();

}, [type])
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=170ec5b83507d5949662c487f938c88e&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {
        movieList?.map(movie=>(
          <Card movie={movie}/>
        ))
      }
      </div>
    </div>
  );
};

export default Movie;
