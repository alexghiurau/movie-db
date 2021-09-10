import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

// standard redux pattern
export default combineReducers({
  movie: movieReducer,
});
