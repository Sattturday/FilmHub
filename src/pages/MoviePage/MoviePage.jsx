import React from 'react';
import { Link } from 'react-router-dom';

export const MoviePage = () => {
  return (
    <section className='film'>
      Здесь будет фильм
      <Link className='film__link' to='/'>
        На главную
      </Link>
    </section>
  );
};
