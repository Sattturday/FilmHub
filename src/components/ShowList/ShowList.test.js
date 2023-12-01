import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ShowList } from './ShowList';

test('renders a list of movie cards', () => {
  // Подготовка данных для теста
  const movies = [
    {
      kinopoiskId: '1',
      posterUrl: '...',
      nameRu: 'Movie 1',
      genres: [],
      ratingKinopoisk: '7.0',
    },
    {
      kinopoiskId: '2',
      posterUrl: '...',
      nameRu: 'Movie 2',
      genres: [],
      ratingKinopoisk: '8.0',
    },
  ];

  render(
    <BrowserRouter>
      <ShowList movies={movies} />
    </BrowserRouter>
  );

  // Получаем элементы карточек фильмов
  const movieCards = screen.getAllByTestId('movie-card');

  expect(movieCards.length).toBe(movies.length);
});
