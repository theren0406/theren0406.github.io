import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from '../actions/index';

const defaultData = [
	{ id: 1, name: 'Joe Kim', phone:'0928-387528', email: 'kkbox@yahoo.com.tw' },
	{ id: 2, name: 'Kathy McDanold', phone:'0915-031204', email: 'together@gmail.com' },
	{ id: 3, name: 'Lily Wang', phone:'0920-832413', email: 'rakuten_team@gmail.com' },
	{ id: 4, name: 'Harry Potter', phone:'0920-257396', email: 'rakuten_group@gmail.com' },
	{ id: 5, name: 'Eddie Redmayne', phone:'0920-290657', email: 'rakuten_react@gmail.com' },
];

export default function(state = defaultData, action) {
	switch (action.type) {

    case ADD_ITEM:
      return [ ...state, action.payload ];

		case DELETE_ITEM:
      return [ ...state ].filter( item => item.id !== action.payload.id );

		case EDIT_ITEM:
			let index = state.findIndex((item => item.id === action.payload.id));
			const newState = [ ...state ];
			newState[index] = action.payload;
			return newState;
	}	
	return state;
}