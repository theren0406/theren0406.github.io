import { combineReducers } from 'redux';
import DataReducer from './reducer_data';
import SelectedItem from './reducer_selectedItem';

const rootReducer = combineReducers({
  data: DataReducer,
  item: SelectedItem
});

export default rootReducer;
