import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem, editItem } from '../actions';
import DataList from './data_list';
import Modal from '../components/Modal';
import Input from '../components/Input';

class DataTable extends Component {
	state = {
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
	onEditClick = () => {
		const { name, phone, email } = this.state;
		if (this.validate()) {
			this.props.editItem({ name, phone, email }, this.props.item.name);
			$('#edit-modal').modal('hide');
		}
	}

	validate(input = 'all') {
		let noError = true;
		let error = { ...this.state.error }

		// validate the inputs
		if (input === 'name' || input === 'all') {
			if (!this.state.name) {
				error.name = '請輸入姓名';
				this.setState({ error })
				noError = false;
			} else {
				const duplicate = this.props.data.some((item) => item.name === this.state.name);
				if (duplicate && this.props.item.name !== this.state.name) {
					error.name = '資料庫已有此姓名的資料，請輸入其他姓名';
					this.setState({ error });
					noError = false;
				} else {
					error.name = '';
					this.setState({ error });
				}
			}
		}
		if (input === 'phone' || input === 'all') {
			const number = /^[\d-]+$/;
			if (this.state.phone && !this.state.phone.match(number)) {
				error.phone = '請輸入數字';
				this.setState({ error });
				noError = false;
			} else {
				error.phone = '';
				this.setState({ error });
			}
		}
		if (input === 'email' || input === 'all') {
			const valid = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
			if (!this.state.email) {
				error.email = '請輸入電子信箱';
				this.setState({ error });
				noError = false;
			} else if (!this.state.email.match(valid)) {
				error.email = '請輸入有效的電子信箱';
				this.setState({ error });
				noError = false;
			} else {
				error.email = '';
				this.setState({ error });
			}
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
							onBlur={() => this.validate('name')}
						/>
						<Input
							stateKey="phone"
							label="電話"
							value={this.state.phone}
							error={this.state.error.phone}
							onChange={this.onInputChange}
							onBlur={() => this.validate('phone')}
						/>
						<Input
							stateKey="email"
							label="電子信箱"
							value={this.state.email}
							error={this.state.error.email}
							onChange={this.onInputChange}
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