import './App.css';
import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

function RenderWatchlist(props) {
  function handleRemoveClick() {
    let movie = `${props.movieID}`;
    window.localStorage.removeItem(movie);
    window.location.reload();
  }
  const card = (
    <article className="movie_article">
      <div className="poster">
        <img src={props.Poster} alt="" />
      </div>
      <div className="movie_info">
        <div className="movie_header">
          <h2>{props.Title}</h2>
          <p>{props.Year}</p>
          <p>⭐{props.imdbRating}</p>
        </div>
        <div className="movie_details">
          <p>{props.Runtime}</p>
          <p>{props.Genre}</p>
          <button
            onClick={handleRemoveClick}
            id={props.movieID}
            className="add_btn"
            aria-label="Add movie to watchlist"
          >
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <IoIosCloseCircle />
              </div>
            </IconContext.Provider>
            Add
          </button>
        </div>
        <div className="movie_plot">
          <p>{props.Plot}</p>
        </div>
      </div>
    </article>
  );

  return card;
}

export default RenderWatchlist;
