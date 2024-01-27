// src/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file for styling

const API_KEY = '3e52e2f5350ae60de5e2fc58e818d2a0';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
        // Take only the first 10 movies
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
