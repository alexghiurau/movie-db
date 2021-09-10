/* eslint-disable import/no-anonymous-default-export */
import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR,
  ADD_MOVIE,
  DELETE_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MOVIE,
} from '../actions/types';

// sets initial state to empty
const initialState = {
  movies: null,
  current: null,
  loading: false,
  error: null,
};

// after dispatching to reducer, data is manipulated using the below switch statement
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        loading: false,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
        loading: false,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
