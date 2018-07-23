import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, DELETE_POST } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {

    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
      // const post = action.payload.data;
      // const newState = { ...state };
      // newStatep[post.id] = post;
      // return newState;

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
			// return action.payload.data.reduce((obj, item) => {
			// 	obj[item.id] = item;
			// 	return obj;
			// }, {});

    case DELETE_POST:
      return _.omit(state, action.payload);
	}	
	return state;
}

const mockUp = 	
[
  { id: 1,
    title: 'Hi!',
    categories: 'Computer, Friends',
    content: 'Post about Friends'
  },
  {
    id: 2,
    title: 'New Post',
    categories: 'Candy',
    content: 'Post about Candy'
  }
];

