import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateMovie } from '../../actions/movieActions';

const EditMovieModal = ({ updateMovie, current }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setYear(current.year);
    }
  }, [current]);

  const onSubmit = () => {
    if (title === '' || year === '') {
      M.toast({ html: 'Please enter a title and year.' });
    } else {
      const updMovie = {
        id: current.id,
        title,
        year,
      };

      updateMovie(updMovie);
      M.toast({ html: 'Updated movie.' });

      // Clear fields
      setTitle('');
      setYear('');
    }
  };

  return (
    <div id='edit-movie-modal' className='modal' style={modalStyle}>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditMovieModal.propTypes = {
  current: PropTypes.object,
  updateMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.movie.current,
});

export default connect(mapStateToProps, { updateMovie })(EditMovieModal);
