import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetMoviesQuery, useSearchMoviesQuery } from '../../api/moviesApi';
import { setSearchResults, setSearchText } from '../../store/searchSlice';
import { setMovies } from '../../store/moviesSlice';
import { SearchForm } from '../../components/SearchForm';
import { ShowList } from '../../components/ShowList';
import { messages } from '../../utils/data';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.list);
  const searchData = useSelector((state) => state.search.results);

  const {
    data: moviesApiData,
    error: moviesApiError,
    isLoading: moviesLoading,
  } = useGetMoviesQuery();

  const {
    data: searchApiData,
    error: searchApiError,
    isLoading: searchLoading,
  } = useSearchMoviesQuery(searchQuery);

  useEffect(() => {
    if (moviesApiData) {
      dispatch(setMovies(moviesApiData.items));
    }
  }, [moviesApiData, dispatch]);

  useEffect(() => {
    if (searchApiData) {
      dispatch(setSearchResults(searchApiData.films));
    }
  }, [searchApiData, dispatch]);

  const handleSearch = (searchQuery) => {
    dispatch(setSearchText(searchQuery));
    setSearchQuery(searchQuery);
  };

  const isLoading = moviesLoading || searchLoading;
  const hasError = moviesApiError || searchApiError;
  const noResults = searchQuery && searchData.length === 0;

  const displayMovies = noResults ? [] : searchQuery ? searchData : moviesData;

  return (
    <main>
      <div className='wrapper'>
        <h1 className='title'>FilmHub</h1>
        <SearchForm handleSearch={handleSearch} />
        {isLoading ? (
          <p className='message'>{messages.loadMessage}</p>
        ) : hasError ? (
          <p className='message'>{messages.errorMessage}</p>
        ) : noResults ? (
          <p className='message'>{messages.searchMessage}</p>
        ) : (
          <ShowList movies={displayMovies} />
        )}
      </div>
    </main>
  );
};
