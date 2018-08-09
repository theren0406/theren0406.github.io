export const SELECT_ITEM = 'select_item';
export const ADD_ITEM = 'add_item';
export const DELETE_ITEM = 'delete_item';
export const EDIT_ITEM = 'edit_item';

export function selectItem(item) {
	return {
		type: SELECT_ITEM,
		payload: item,
	};
}
export function addItem(item) {
	return {
		type: ADD_ITEM,
		payload: item
	};
}
export function deleteItem(item) {
	return {
		type: DELETE_ITEM,
		payload: item
	};
}
export function editItem(item, prevName) {
	return {
		type: EDIT_ITEM,
		payload: item,
		prevName
	};
}