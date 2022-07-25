import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderWatchlist from './RenderWatchlist.js';
import './App.css';
import './reset.css';
import './color_mode.js';
import './check_color_prefs.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
let movieIDs = [];

function getLocalStorage() {
  let keys = Object.keys(localStorage).filter((key) => key !== 'color-mode');
  let movieNumber = keys.length;

  for (let i = 0; i < movieNumber; i++) {
    movieIDs.push(keys[i]);
  }
  return movieIDs;
}
getLocalStorage();

function renderLocalStorage(movies) {
  if (movieIDs.length < 1) {
    root.render(
      <React.StrictMode>
        <div className="main_content">
          `
          <img
            className="placeholder_icon"
            src="./resources/media/noun-filmstrip-407066-9B9B9B.svg"
            alt="film icon"
          />
          <p>You don't have any saved movies yet!</p>
          <a href="https://www.flaticon.com/free-icons/film" title="film icons">
            Film icons created by Freepik - Flaticon
          </a>
          `
        </div>
      </React.StrictMode>
    );
  }
  let fData = movies.map((m) => {
    let film = JSON.parse(window.localStorage.getItem(m));
    return (
      <RenderWatchlist
        key={film.imdbID}
        movieID={film.imdbID}
        Title={film.Title}
        Poster={film.Poster}
        Year={film.Year}
        imdbRating={film.imdbRating}
        Runtime={film.Runtime}
        Genre={film.Genre}
        Plot={film.Plot}
      />
    );
  });
  root.render(
    <React.StrictMode>
      <div className="main_content">{fData}</div>
    </React.StrictMode>
  );
}

renderLocalStorage(movieIDs);
