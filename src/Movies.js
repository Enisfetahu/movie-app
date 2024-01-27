// src/Movies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Movies.css';

const API_KEY = '3e52e2f5350ae60de5e2fc58e818d2a0';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const moviesPerPage = 10;

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const response = await axios.get(
          `${API_URL}?api_key=${API_KEY}&page=${pageNumber + 1}`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <h2>Movies</h2>
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
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Movies;
