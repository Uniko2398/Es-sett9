import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixNavbar from "./assets/components/NetflixNavbar";
import TvShow from "./assets/components/TvShows";

function App() {
  return (
    <>
      <NetflixNavbar></NetflixNavbar>
      <TvShow />
    </>
  );
}

export default App;
