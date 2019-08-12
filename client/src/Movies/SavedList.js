import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink className="saved-movie" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
    ))}
    <div className="home-button">Home</div>
  </div>
);

export default SavedList;
