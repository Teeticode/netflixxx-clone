import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';
import Row from './Row.js';
import requests from './Requests.js';
import Banner from './Banner.js';
export default function App() {
  return (
    <div>
      {/* navbar */}
      <Banner />
      
      <Row title="Trending Now" isLargeRow fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}
