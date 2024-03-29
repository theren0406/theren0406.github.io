import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
	data: PostReducer,
	form: formReducer
});

export default rootReducer;
