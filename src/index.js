import React from 'react';
import ReactDOM from 'react-dom/client';
import Render from './Render.js';
import './App.css';
import './reset.css';
import './color_mode.js';
import './check_color_prefs.js';

const searchInput = document.getElementById('movieSearchInput');
const searchBtn = document.getElementById('movieSearchBtn');
const root = ReactDOM.createRoot(document.getElementById('root'));
let movieData = [];
let movieArray = [];

let handleSubmit = function (event) {
  movieArray = [];
  root.render(
    <React.StrictMode>
      <div className="main_content"></div>
    </React.StrictMode>
  );
  fetch(`https://www.omdbapi.com/?apikey=9e510766&s=${searchInput.value}`)
    .then(handleResponse)
    .then((data) => {
      for (let movie of data.Search) {
        movieArray.push(movie.Title);
      }
      console.log(movieArray);
      return movieArray;
    })
    .then((movieArray) => {
      movieData.length = 0;
      for (let movie of movieArray) {
        fetch(`https://www.omdbapi.com/?apikey=9e510766&t=${movie}`)
          .then(handleResponse)
          .then((data) => {
            if (data.Poster !== 'N/A') {
              movieData.push(data);
            }
            let mData = movieData.map((m) => {
              return (
                <Render
                  key={m.imdbID}
                  movieID={m.imdbID}
                  Title={m.Title}
                  Poster={m.Poster}
                  Year={m.Year}
                  imdbRating={m.imdbRating}
                  Runtime={m.Runtime}
                  Genre={m.Genre}
                  Plot={m.Plot}
                />
              );
            });
            root.render(
              <React.StrictMode>
                <div className="main_content">{mData}</div>
              </React.StrictMode>
            );
          });
      }
    })
    .catch((error) => console.log(error));
  event.preventDefault();
};

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response);
  } else if (contentType.includes('text/html')) {
    return handleTextResponse;
  } else {
    throw new Error(
      `Sorry, content-type: ${contentType} is not currently supported`
    );
  }
}
function handleJSONResponse(response) {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(
        Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText,
        })
      );
    }
  });
}
function handleTextResponse(response) {
  return response.text().then((text) => {
    if (response.ok) {
      return text;
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        err: text,
      });
    }
  });
}
searchInput.addEventListener('submit', handleSubmit);
searchBtn.addEventListener('click', handleSubmit);
