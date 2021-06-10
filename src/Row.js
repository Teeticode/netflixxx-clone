import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from './axios.js';
import './row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const baseurl = 'https://image.tmdb.org/t/p/original/';

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  console.table(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            onClick={() => {
              handleClick(movie);
            }}
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
