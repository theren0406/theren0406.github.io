import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions';
import Modal from '../components/Modal';

class DeleteModal extends Component {
	  
	onDeleteClick = () => {
		this.props.deleteItem(this.props.item);
	}

	render() {
		return (
			<Modal id="delete-modal" size="modal-sm">
				<p>是否確定刪除此筆資料 ?</p>
      	<div className="btn_container">
     			<button className="btn btn-cancel" data-dismiss="modal">取消</button>
     			<button
     				className="btn btn-main" id="deleteBtn"
     				data-dismiss="modal"
     				onClick={this.onDeleteClick}
      		>確定
      		</button>
      	</div>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return { item: state.item };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deleteItem: deleteItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);