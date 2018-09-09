import { combineReducers } from 'redux';
import DataReducer from './data';
import SelectedItem from './selectedItem';

const rootReducer = combineReducers({
  data: DataReducer,
  item: SelectedItem
});

export default rootReducer;
