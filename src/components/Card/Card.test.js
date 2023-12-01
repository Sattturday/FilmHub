import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card } from './Card';

test('renders card component with movie details', () => {
  const cardData = {
    kinopoiskId: '12345',
    posterUrl: 'https://example.com/poster.jpg',
    nameRu: 'Movie Name',
    genres: [{ genre: 'Action' }, { genre: 'Adventure' }],
    ratingKinopoisk: '7.5',
  };

  render(
    <Router>
      <Card card={cardData} />
    </Router>
  );

  const image = screen.getByAltText(`Обложка фильма ${cardData.nameRu}`);
  expect(image).toBeInTheDocument();

  const title = screen.getByText(cardData.nameRu);
  expect(title).toBeInTheDocument();

  const genre1 = screen.getByText('Action');
  expect(genre1).toBeInTheDocument();

  const genre2 = screen.getByText('Adventure');
  expect(genre2).toBeInTheDocument();

  const rating = screen.getByText(cardData.ratingKinopoisk);
  expect(rating).toBeInTheDocument();
});
