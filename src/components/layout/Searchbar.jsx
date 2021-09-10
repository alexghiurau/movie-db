import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovies } from '../../actions/movieActions';

const Searchbar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBotton: '30px' }} className='red'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search movies...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchMovies })(Searchbar);
