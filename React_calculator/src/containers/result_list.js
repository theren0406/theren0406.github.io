import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteResult, sortAscResult, sortDescResult } from '../actions/index';
import { bindActionCreators } from 'redux';

class ResultList extends Component {

	deleteResult = id => {
		this.props.deleteResult(id);
	}
	sortAscResult = () => {
		this.props.sortAscResult();
	}
	sortDescResult = () => {
		this.props.sortDescResult();
	}

	renderList() {
		return this.props.results.map(item => (
			<li key={item.id} className="list-item">
				{item.result}
				<span className="delete" 
					onClick={() => this.deleteResult(item.id)}>X</span>
			</li>
			)
		)
	}

	render() {
		return (
			<ul className="list">
				<li className="list-title">
					計算結果列表
					<span className="triangle upTriangle" onClick={this.sortAscResult} />
					<span className="triangle downTriangle" onClick={this.sortDescResult} />
				</li>
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		results: state.results
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		deleteResult, 
		sortAscResult, 
		sortDescResult
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);