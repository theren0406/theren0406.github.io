import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/index';
import Modal from './Modal';
import Input from './Input';

class AddModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
				name: '',
				phone: '',
				email: '',
				error: { name: '', phone: '', email: '' },
			}
		this.onInputChange = this.onInputChange.bind(this);
		this.onAddClick = this.onAddClick.bind(this);
		this.validate = this.validate.bind(this);
	}

	onInputChange(key, e) {
		this.setState({[key]: e.target.value});
	}
	onAddClick() {
		const { name, phone, email } = this.state;

		if (this.validate()) {
			this.props.addItem({ name, phone, email });
			this.setState({
				name: '',
				phone: '',
				email: '',
				error: { name: '',phone: '', email: '' },
			});
			$('#add-modal').modal('hide');
		}
	}
	validate(input = 'all') {
		let noError = true;
		let error = {...this.state.error}
		
		// Validate the inputs
		if (input === 'name' || input === 'all') {
			if (!this.state.name) {
				error.name = '請輸入姓名';
				this.setState({error})
				noError = false;
			} else {
				const duplicate = this.props.data.some((item) => item.name === this.state.name);
				if (duplicate) {
					error.name = '資料庫已有此姓名的資料，請輸入其他姓名';
					this.setState({error});
					noError = false;
				} else {
					error.name = '';
					this.setState({error});
				}
			}
		}
		if (input === 'phone' || input === 'all') {
			const number = /^[\d-]+$/;
			if (this.state.phone && !this.state.phone.match(number)) {
				error.phone = '請輸入數字';
				this.setState({error});
				noError = false;
			} else {
				error.phone = '';
				this.setState({error});
			}
		}
		if (input ==='email' || input === 'all') {
			const valid = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
			if (!this.state.email) {
				error.email = '請輸入電子信箱';
				this.setState({error});
				noError = false;
			} else if (!this.state.email.match(valid)) {
				error.email = '請輸入有效的電子信箱';
				this.setState({error});
				noError = false;
			} else {
				error.email = '';
				this.setState({error});
			}
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
						required="*必填"
						value={this.state.email}
						error={this.state.error.email}
						onChange={this.onInputChange}
						onBlur={() => this.validate('email')}
					/>
					<div className="btn_container">
						<button className="btn btn-cancel" data-dismiss="modal">取消</button>
     				<button type="button"
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