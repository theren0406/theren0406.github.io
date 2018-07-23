import React, { Component } from 'react';
// const Component = React.Component;

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}
	render() {
		return (
			<form 
				className="search-bar"
				onSubmit={this.onInputSubmit.bind(this)}
				>
				<input 
					value={this.state.term} 
					onChange={e => this.setState({ term: e.target.value})} 
					// onKeyDown={e => this.onEnterKeyDown(e)} 
					placeholder=" Search.."/>
				<button type="submit"><i className="fa fa-search"></i></button>
			</form>
		);
	}

	onInputSubmit(e) {
		e.preventDefault();
		this.props.onSearchTermChange(this.state.term);
	}

	onEnterKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.onSearchTermChange(this.state.term);
		}
	}
}

export default SearchBar;