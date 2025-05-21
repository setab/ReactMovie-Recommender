import { useState } from "react";
import "../css/MovieCard.css";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  url: string;
};

type MovieProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieProps) {
  const [love, setLove] = useState<string>("🤍");
  function FavButtonClick() {
    setLove((prev) => (prev === "🤍" ? "❤️" : "🤍"));
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.url}
          alt={movie.title}
          className="w-64 h-64 object-cover rounded-md transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />

        <div className="absolute top-2 right-2">
          <button
            className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
            onClick={FavButtonClick}
          >
            {love}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
