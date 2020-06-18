import React, { useState } from 'react';

const SearchBar = ({ onSearchTermChange }) => {
	const [query, setQuery] = useState('');

	const onInputSubmit = e => {
		e.preventDefault();
		onSearchTermChange(query);
	}

	const onEnterKeyDown = e => {
		if (e.key === 'Enter') {
			onSearchTermChange(query);
		}
	}

	return (
		<form 
			className="search-bar"
			onSubmit={onInputSubmit}
			>
			<input 
				value={query} 
				onChange={e => setQuery(e.target.value)} 
				// onKeyDown={e => onEnterKeyDown(e)} 
				placeholder=" Search.."/>
			<button type="submit"><i className="fa fa-search"></i></button>
		</form>
	);
}

export default SearchBar;