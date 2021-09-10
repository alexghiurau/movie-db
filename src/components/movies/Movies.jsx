import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import Preloader from '../layout/Preloader';
import { getMovies } from '../../actions/movieActions';

const Movies = ({ movie: { movies, loading }, getMovies }) => {
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  if (loading || movies === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Movie Database</h4>
      </li>
      {!loading && movies.length === 0 ? (
        <p className='center'>
          No movies to show. Try adding one by clicking the + button!
        </p>
      ) : (
        movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
      )}
    </ul>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovies })(Movies);
