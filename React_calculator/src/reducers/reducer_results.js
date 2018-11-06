
export default function(state = [], action) {
	switch (action.type) {
		case 'ADD_RESULT': 
			return [...state, { 
				id: Date.now(),
				result: action.payload,
				answer: action.answer 
			}];
			break;
		case 'DELETE_RESULT': 
			return state.filter(item => item.id !== action.payload);
		case 'SORT_ASC_RESULT': 
			const ascState = [...state];
			return ascState.sort((a, b) => a.answer - b.answer);
		case 'SORT_DESC_RESULT': 
			const descState = [...state];
			return descState.sort((a, b) => b.answer - a.answer);
	}

	return state
}