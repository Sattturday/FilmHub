import { useState } from 'react';

import './SearchForm.scss';

export function SearchForm({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  function onSearch(e) {
    e.preventDefault();
    handleSearch(searchQuery);
  }

  return (
    <section className='search' aria-label='Поиск фильмов'>
      <form
        className='search__form'
        onSubmit={onSearch}
        data-testid='search-form'
      >
        <input
          className='search__input'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Поиск фильмов по названию'
        />
        <button className='search__submit' type='submit' />
      </form>
    </section>
  );
}
