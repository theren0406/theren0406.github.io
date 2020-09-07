import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions';

import { checkError } from './validate';
import Modal from '../components/Modal';
import Input from '../components/Input';

class AddModal extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		error: { name: '', phone: '', email: '' }
	}
	
	onInputChange = (key, e) => {
		this.setState({ [key]: e.target.value });
	}

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
    }
	}

	onAddClick = () => {
		const { name, phone, email } = this.state;
		const id = new Date().getTime()
	
		if (this.validate()) {
			this.props.addItem({ id, name, phone, email });
			this.setState({
				name: '',
				phone: '',
				email: '',
				error: { name: '', phone: '', email: '' },
			});
			$('#add-modal').modal('hide');
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
			<Modal id="add-modal" title="新增資料">
				<form>
					<Input
						stateKey="name"
						label="姓名"
						required="*必填"
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
						required="*必填"
						value={this.state.email}
						error={this.state.error.email}
						onChange={this.onInputChange}
						onKeyDown={this.handleKeyDown} 
						onBlur={() => this.validate('email')}
					/>
					<div className="btn_container">
						<button className="btn btn-cancel" data-dismiss="modal">取消</button>
						<button type="button" id="submitBtn"
							className="btn btn-main"
							onClick={this.onAddClick}
						>新增
     				</button>
					</div>
				</form>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addItem: addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);