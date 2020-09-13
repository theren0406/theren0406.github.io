import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions/index';

const initState = {
  data: [],
  error: false
}

export default function(state = initState, action) {
	switch (action.type) {

    case FETCH_POST:
      console.log(action)
      if (action.error) {
        return { ...state, error: true}
      } else {
        return { ...state, data: [action.payload.data]}
      }

		case FETCH_POSTS:
 			return { error: false, data: action.payload.data };

    case DELETE_POST:
      return _.omit(state, action.payload);
	}	
	return state;
}
