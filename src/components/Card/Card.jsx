import { Link } from 'react-router-dom';

import './Card.scss';

export function Card({ card }) {
  const link = `/films/${card.kinopoiskId}`;

  return (
    <li className='card'>
      <Link className='card__link' to={link}>
        <img
          className='card__image'
          src={card.posterUrl}
          alt={`Обложка фильма ${card.nameRu}`}
        />

        <div className='card__info'>
          <h2 className='card__title'>{card.nameRu}</h2>
          <p>Жанр:</p>
          {card?.genres.map((genre, index) => (
            <p key={index}>{genre.genre}</p>
          ))}

          <span className='card__rating'>{card.ratingKinopoisk}</span>
        </div>
      </Link>
    </li>
  );
}
