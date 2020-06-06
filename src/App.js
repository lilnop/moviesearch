import React from 'react';
import "./index.css";
import SearchMovies from "./Components/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Searcher</h1>
      <SearchMovies/>
    </div>
  );
}


export default App;
