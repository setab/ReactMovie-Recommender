import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [serachQuery, setSerachQuery] = useState<string>("");

  const movies = [
    { id: 1, title: "terminator", release_date: "2023", url: "#" },
  ];
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle Search");
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for Movies.."
          className="serach-input"
          value={serachQuery}
          onChange={(e) => setSerachQuery(e.target.value)}
        />
        <button type="submit" className="serach-button">
          search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
