import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNavbar from "./assets/components/NetflixNavbar";
import TvShow from "./assets/components/TvShows";
import MovieGrid from "./assets/components/MovieGrid";
function App() {
  const apiKey = "f4ce3b4a";
  return (
    <div className="bg-dark text-white">
      <NetflixNavbar></NetflixNavbar>
      <TvShow />

      <MovieGrid
        title="Trending Now"
        apiUrl={`https://www.omdbapi.com/?apikey=${apiKey}&s=Star%20Wars`}
      ></MovieGrid>
    </div>
  );
}

export default App;
