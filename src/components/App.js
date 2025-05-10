
import React from "react";
import './../styles/App.css';
import { useContext } from "react";
import { movieContext } from "../context/movieContext";

const App = () => {

  const {movies} = useContext(movieContext)

  return (
    <div>
    
    {
      movies ? movies.map(movie=>{
        return (<div>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster}></img>
        </div>)
      }) : <p>Invalid movie name. Please try again.</p>
    }
    </div>
  )
}

export default App
