import './App.css';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

function Render(props) {
  function handleAmazonClick() {
    window.open(
      `https://www.amazon.com/s?k=${props.Title}&i=instant-video`,
      '_blank',
      'noopener, noreferrer'
    );
  }
  function handleNetflixClick() {
    window.open(
      `https://www.netflix.com/search?q=${props.Title}`,
      '_blank',
      'noopener, noreferrer'
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
          <div className="movie_btn_search">
            <button
              onClick={handleAmazonClick}
              id={props.movieID}
              className="add_btn"
              aria-label="Search for movie on Amazon"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <div>
                  <IoIosSearch />
                </div>
              </IconContext.Provider>
              Amazon
            </button>
            <button
              onClick={handleNetflixClick}
              id={props.movieID}
              className="add_btn"
              aria-label="Search for movie on Netflix"
            >
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <div>
                  <IoIosSearch />
                </div>
              </IconContext.Provider>
              Netflix
            </button>
          </div>
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
