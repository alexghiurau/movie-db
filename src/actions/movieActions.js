import {
  GET_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  MOVIES_ERROR,
} from './types';

// Get movies from server
export const getMovies = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/movies');
    const data = await res.json();

    dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new movie
export const addMovie = (movie) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_MOVIE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// delete logs from server
export const deleteMovie = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/movies/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_MOVIE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Update movie on server
export const updateMovie = (movie) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/movies/${movie.id}`, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_MOVIE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set current movie
export const setCurrent = (movie) => {
  return {
    type: SET_CURRENT,
    payload: movie,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
