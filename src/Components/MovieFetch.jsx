import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import All from "./Movie/All";
import Action from "./Movie/Action";
import Animation from "./Movie/Animation";
import Thriller from "./Movie/Thriller";
import Horror from "./Movie/Horror";
import Drama from "./Movie/Drama";
import Sci_Fi from "./Movie/Sci-Fi";
// import Home from './Home'
import "./Styles/Style.css";
import { movies } from "./Movie/Data";
import "../index.css";

const MovieFetch = () => {
  const [showMovie, setShowMovie] = useState(movies);
  const fetchMovieData = (cat) => {
    setShowMovie(movies.filter((showData) => showData.category == cat));
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <span>
            <Link to="/" onClick={() => setMovieList(movies)}>Movie</Link>
          </span>
        </div>
        <nav className="navigaiton">
          <ul>
            <li>
              <Link to="/action" onClick={() => fetchMovieData("Action")}>
                Action
              </Link>
            </li>
            <li>
              <Link to="/thriller" onClick={() => fetchMovieData("Thriller")}>Thriller</Link>
            </li>
            <li>
              <Link to="/animation" onClick={() => fetchMovieData("Animation")}>Animation</Link>
            </li>
            <li>
              <Link to="/horror" onClick={() => fetchMovieData("Horror")}>Horror</Link>
            </li>
            <li>
              <Link to="/drama" onClick={() => fetchMovieData("Drama")}>Drama</Link>
            </li>
            <li>
              <Link to="/sci-fi" onClick={() => fetchMovieData("Sci-Fi")}>Sci-Fi</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="linkRedirect">
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path="/all" element={<All />} />
          <Route path="/action" element={<Action />} />
          <Route path="/thriller" element={<Thriller />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/sci-fi" element={<Sci_Fi />} />
        </Routes>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1300px",
          // backgroundColor:'yellow',
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {showMovie.map((data) => (
          <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieFetch;
