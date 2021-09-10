import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMovie, setCurrent } from '../../actions/movieActions';

import M from 'materialize-css/dist/js/materialize.min.js';

// Movie Items are part of the Movie component, each representing an individual movie
const MovieItem = ({ movie, deleteMovie, setCurrent }) => {
  // clicking trash icon will delete selected movie from db
  const onDelete = () => {
    deleteMovie(movie.id);
    M.toast({ html: 'Movie deleted.' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-movie-modal'
          className={'modal-trigger blue-text'}
          onClick={() => setCurrent(movie)}>
          {movie.title} - {movie.year}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Movie ID #{movie.id} </span>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteMovie, setCurrent })(MovieItem);
