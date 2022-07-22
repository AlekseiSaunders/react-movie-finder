import './App.css';
import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

function Render(props) {
  function handleAddClick() {
    let movieToStore = {
      poster: `${props.Poster}`,
      title: `${props.Title}`,
      year: `${props.Year}`,
      rating: `${props.imdbRating}`,
      runtime: `${props.Runtime}`,
      genre: `${props.Genre}`,
      plot: `${props.Plot}`,
      movieID: `${props.movieID}`,
    };
    window.localStorage.setItem(
      `${props.movieID}`,
      JSON.stringify(movieToStore)
    );
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
            onClick={handleAddClick}
            id={props.movieID}
            className="add_btn"
            aria-label="Add movie to watchlist"
          >
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <IoIosAddCircle />
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

export default Render;

// const addBtn = document.getElementById(`${props.imdbID}`);
// addBtn.addEventListener(
//   'click',
//   () => {
//     let movieToStore = {
//       poster: `${props.Poster}`,
//       title: `${props.Title}`,
//       year: `${props.Year}`,
//       rating: `${props.imdbRating}`,
//       runtime: `${props.Runtime}`,
//       genre: `${props.Genre}`,
//       plot: `${props.Plot}`,
//       movieID: `${props.imdbID}`,
//     };
//     window.localStorage.setItem(
//       `${props.imdbID}`,
//       JSON.stringify(movieToStore)
//     );
//   }
// handleAddClick
// () => {
//     console.log(event.target.dataset.movie);
//   }
// );
