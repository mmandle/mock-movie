import React from 'react';
import { MovieInterface } from '@/types';
import MovieCard from '@/components/MovieCard';
import { isEmpty } from 'lodash';

interface MovieListProps {
  data: MovieInterface[];
  title: string;
  filterGenre?: string; // Optional prop to specify the genre to filter
}

const MovieList: React.FC<MovieListProps> = ({ data, title, filterGenre }) => {
  if (isEmpty(data)) {
    return null;
  }

  // Filter movies by genre if filterGenre is provided
  const filteredMovies = filterGenre
    ? data.filter((movie) => movie.genre.includes(filterGenre))
    : data;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
