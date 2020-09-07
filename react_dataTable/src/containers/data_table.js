import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem, editItem } from '../actions';

import { checkError } from './validate';
import DataList from './data_list';
import Modal from '../components/Modal';
import Input from '../components/Input';

class DataTable extends Component {
	state = {
		id: 0,
		name: '',
		phone: '',
		email: '',
		error: { name: '', phone: '', email: '' }
	}

	showEditModal = (item) => {
		$('#edit-modal').modal('show');
		this.setState({ ...item, error: { name: '', phone: '', email: '' } });
		this.props.selectItem(item);
	}

	onInputChange = (key, e) => {
		this.setState({ [key]: e.target.value });
	}

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
    }
	}

	onEditClick = () => {
		const { id, name, phone, email } = this.state;
		if (this.validate()) {
			this.props.editItem({ id, name, phone, email });
			$('#edit-modal').modal('hide');
		}
	}

	validate(input = 'all') {
		let noError = true;
		const checked = checkError(input, this.state, this.props);
		const { name, phone, email } = checked;

		this.setState({
			error: checked
		});
		if (name !== '' || phone !== '' || email !== '') {
			noError = false;
		}
		// If noError is ture, the form is fine to submit
		return noError;
	}

	render() {
		return (
			<div>
				<div className="header">
					點選列表即可修改資料
					<button className="btn btn-main btn-add"
						data-toggle="modal"
						data-target="#add-modal"
					>新增資料</button>
				</div>
				<DataList showEditModal={this.showEditModal} />
				<Modal id="edit-modal" title="修改資料">
					<form>
						<Input
							stateKey="name"
							label="姓名"
							value={this.state.name}
							error={this.state.error.name}
							onChange={this.onInputChange}
							onKeyDown={this.handleKeyDown}
							onBlur={() => this.validate('name')}
						/>
						<Input
							stateKey="phone"
							label="電話"
							value={this.state.phone}
							error={this.state.error.phone}
							onChange={this.onInputChange}
							onKeyDown={this.handleKeyDown}
							onBlur={() => this.validate('phone')}
						/>
						<Input
							stateKey="email"
							label="電子信箱"
							value={this.state.email}
							error={this.state.error.email}
							onChange={this.onInputChange}
							onKeyDown={this.handleKeyDown}
							onBlur={() => this.validate('email')}
						/>
						<div className="btn_container">
							<button className="btn btn-cancel" data-dismiss="modal">取消</button>
							<button
								type="button" id="editBtn"
								className="btn btn-main"
								onClick={this.onEditClick}
							>儲存
  	   				</button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
		item: state.item
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectItem, editItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);