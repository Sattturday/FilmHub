import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetMoviesByIdQuery } from '../../api/moviesApi';
import { messages } from '../../utils/data';
import './MoviePage.scss';

export const MoviePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMoviesByIdQuery(id);

  return (
    <main>
      <section className='film'>
        <div className='wrapper'>
          <h1 className='title'>FilmHub</h1>
          {isLoading ? (
            <p className='message'>{messages.loadMessage}</p>
          ) : error ? (
            <p className='message'>{messages.errorMessage}</p>
          ) : (
            <>
              <div className='film__wrapper'>
                <img
                  className='film__image'
                  src={data.posterUrl}
                  alt='Постер фильма'
                />
                <div className='film__info'>
                  <div className='film__column'>
                    <h2 className='film__title'>{data.nameRu}</h2>
                    <div className='film__genre'>
                      <p>Жанр:</p>
                      {data.genres.map((genre, index) => (
                        <p key={index}>{genre.genre}</p>
                      ))}
                    </div>
                    <span className='film__rating'>
                      Рейтинг кинопоиска: {data.ratingKinopoisk || '-'}
                    </span>
                    <p className='film__description'>{data.description}</p>
                    <a className='film__link' href={data.webUrl}>
                      Подробнее на Кинопоиске&nbsp;&rarr;
                    </a>
                  </div>
                  <Link className='film__link' to='/'>
                    &larr;&nbsp;На главную
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};
