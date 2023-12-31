import { Link } from 'react-router-dom';

import './Card.scss';

export function Card({ card }) {
  const link = `/films/${card.kinopoiskId || card.filmId}`;

  return (
    <li className='card'>
      <Link className='card__link' to={link} data-testid='movie-card'>
        <img
          className='card__image'
          src={card.posterUrl}
          alt={`Обложка фильма ${card.nameRu}`}
        />

        <div className='card__info'>
          <h2 className='card__title'>{card.nameRu}</h2>
          <span className='card__rating'>
            {card.ratingKinopoisk || card.rating || 0}
          </span>
        </div>
        <div className='card__genre'>
          <p>Жанр:</p>
          {card?.genres?.map((genre, index) => (
            <p key={index}>{genre.genre}</p>
          ))}
        </div>
      </Link>
    </li>
  );
}
