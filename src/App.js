import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//de6c55e3

const API_URL = "http://www.omdbapi.com?apikey=de6c55e3";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Search</h1>
    </div>
  );
}

export default App;
