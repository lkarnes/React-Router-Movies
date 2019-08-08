import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/' component={MovieList}/>
        <Route path='/movies/:id' component={Movie}/>
      </div>
      
    </div>
  );
};

export default App;
