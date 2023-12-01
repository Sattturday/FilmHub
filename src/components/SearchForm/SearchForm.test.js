import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

test('renders search form and handles search input', () => {
  const mockHandleSearch = jest.fn();

  render(<SearchForm handleSearch={mockHandleSearch} />);

  const form = screen.getByTestId('search-form');
  const input = screen.getByPlaceholderText('Поиск фильмов по названию');

  fireEvent.change(input, { target: { value: 'Interstellar in space' } });
  fireEvent.submit(form);

  expect(mockHandleSearch).toHaveBeenCalledWith('Interstellar in space');
});
