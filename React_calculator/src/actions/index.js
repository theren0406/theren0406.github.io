export function addResult(result, answer) {
	return {
		type: 'ADD_RESULT',
		payload: result,
		answer
	};
}

export function deleteResult(id) {
	return {
		type: 'DELETE_RESULT',
		payload: id
	};
}

export function sortAscResult() {
	return {
		type: 'SORT_ASC_RESULT'
	};
}

export function sortDescResult() {
	return {
		type: 'SORT_DESC_RESULT'
	};
}