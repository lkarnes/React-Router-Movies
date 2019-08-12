import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import {NavLink} from 'react-router-dom';


const Movie = (props) => {
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    const id = props.match.params.id;
    console.log(props)

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  const saveMovie = () => {
    console.log(props.addToSavedList)
    const addToSavedList = props.addList;
    addToSavedList(movie);
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div>
      <button onClick={saveMovie}>
        Save
      </button>
      <MovieCard key={movie.id} movie={movie} />
    </div>
    
  );
}

export default Movie;