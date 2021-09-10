import React, { useRef } from 'react';
import { connect } from 'react-redux';

const Searchbar = ({}) => {
  const text = useRef('');

  return (
    <nav style={{ marginBotton: '30px' }} className='red'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search movies... (not yet implemented)'
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

export default Searchbar;
