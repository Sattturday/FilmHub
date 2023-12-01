import { Card } from '../Card';
import './ShowList.scss';

export const ShowList = ({ movies }) => {
  return (
    <section className='movies' aria-label='Список фильмов'>
      <ul className='movies__list'>
        {movies.map((movie, index) => (
          <Card key={`${movie.kinopoiskId}_${index}`} card={movie} />
        ))}
      </ul>
    </section>
  );
};
