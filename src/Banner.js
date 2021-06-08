import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from './axios.js';
import requests from './Requests.js';
import './Banner.css';

const baseurl = 'https://image.tmdb.org/t/p/original/';

export default function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">list</button>
        </div>

        <div className="banner__description">
          <h1>{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
    </header>
  );
}
