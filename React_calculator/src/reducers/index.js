import { combineReducers } from 'redux';
import ButtonList from './reducer_buttons';
import ResultList from './reducer_results';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  buttons: ButtonList,
  results: ResultList
});

export default rootReducer;
