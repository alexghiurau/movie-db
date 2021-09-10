import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie } from '../../actions/movieActions';

const AddMovieModal = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const onSubmit = () => {
    if (title === '' || year === '') {
      M.toast({ html: 'Please enter a title and year.' });
    } else {
      const newMovie = {
        title,
        year,
      };

      addMovie(newMovie);

      M.toast({ html: `Movie added.` });
      // Clear fields
      setTitle('');
      setYear('');
    }
  };

  return (
    <div id='add-movie-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Movie</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Movie Title
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='year'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor='year' className='active'>
              Movie Year
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

AddMovieModal.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { addMovie })(AddMovieModal);
