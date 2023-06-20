import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions/index';

const initState = {
  // posts: {},
  // post: {},
  error: false
}

export default function(state = initState, action) {
	switch (action.type) {

    case FETCH_POST:
      if (action.error) {
        return { ...state, error: true}
      } else {
        return { ...state, post: [action.payload.data]}
      }

		case FETCH_POSTS:
 			return { error: false, posts: action.payload.data };

    case DELETE_POST:
      return _.omit(state, action.payload);
	}	
	return state;
}
