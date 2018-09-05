import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from '../actions/index';

const defaultData = [
	{ name: 'Joe Kim', phone:'0928-387528', email: 'kkbox@yahoo.com.tw' },
	{ name: 'Kathy McDanold', phone:'0915-031204', email: 'together@gmail.com' },
	{ name: 'Lily Wang', phone:'0920-832413', email: 'rakuten_team@gmail.com' },
	{ name: 'Harry Potter', phone:'0920-257396', email: 'rakuten_group@gmail.com' },
	{ name: 'Eddie Redmayne', phone:'0920-290657', email: 'rakuten_react@gmail.com' },
];

export default function(state = defaultData, action) {
	switch (action.type) {

    case ADD_ITEM:
      return [ ...state, action.payload ];

		case DELETE_ITEM:
      return [ ...state ].filter( item => item.name !== action.payload.name );

		case EDIT_ITEM:
			let index = state.findIndex((obj => obj.name === action.prevName));
			const newState = [ ...state ];
			newState[index] = action.payload;
			return newState;
	}	
	return state;
}