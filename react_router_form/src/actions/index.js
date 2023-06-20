import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

axios.defaults.baseURL = 'https://react-form-4e97a-default-rtdb.firebaseio.com/';

export function fetchPosts() {
	const request = axios.get('/data.json');

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`/data/${id}.json`);
	
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function createPost(values, callback) {
	const request = axios.post('/data.json', values)
		.then(() => callback());
	
	return {
		type: CREATE_POST,
		payload: values
	}
}

export function deletePost(id, callback) {
	const request = axios.delete(`data/${id}.json`)
		.then(() => callback());
	
	return {
		type: DELETE_POST,
		payload: id
	}
}
