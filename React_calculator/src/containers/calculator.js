import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResult } from '../actions/index';
import { bindActionCreators } from 'redux';

import Button from '../components/button';

class Calculator extends Component {
	state = {
		input: '0',
		firstNumber: '0',
		operator: '',
		secondNumber: '',
		withDecimal: false
	}

	changeInput = calInput => {
		if (calInput === '.') {
			if (this.state.withDecimal === true) {
				calInput = '';
			} else {
				this.setState({ withDecimal: true });
			}
		} 

		if (this.state.input === '0') {
			if (calInput === '.') calInput = '0.';

			this.setState({ 
				input: calInput, 
				firstNumber: calInput 
			});
		}
		else if (this.state.operator === '') {
			this.setState(prevState => {
				return {
					input: prevState.input + calInput,
					firstNumber: prevState.firstNumber + calInput
				};
			});
		} else {
			if (calInput === '.' && this.state.secondNumber === '') calInput = '0.';
			
			this.setState(prevState => {
				return {
					input: prevState.input + calInput,
					secondNumber: prevState.secondNumber + calInput
				};
			});
		}
	}
	changeOperator = calOperator => {
		this.setState({
			input: this.state.firstNumber + calOperator,
			operator: calOperator,
			secondNumber: '',
			withDecimal: false
		});
	}
	submitInput = () => {
		const { input, operator, firstNumber, secondNumber } = this.state;
		let answer = 0;
		switch (operator) {
			case '+':
				answer = parseFloat(firstNumber) + parseFloat(secondNumber);
				break;
			case '-':
				answer = firstNumber - secondNumber;
				break;
			case '×':
				answer = firstNumber * secondNumber;
				break;
			case '÷':
				answer = firstNumber / secondNumber;
				break;
		}
		const result = input + '=  ' + answer;
		this.setState({ input: '0', firstNumber: '0', operator: '', secondNumber: '', withDecimal: false });
		this.props.addResult(result, answer);
	}

	renderList() {
		return this.props.buttons.map((button, index) => {
			switch (button) {
				case '=':
					return (
						<Button key={index} content={button} className="isEqual"
							click={() => this.submitInput(button)} />
					);
					break;
				case '+':
				case '-':
				case '×':
				case '÷':
					return (
						<Button key={index} content={button} className="isOperator"
							click={() => this.changeOperator(button)} />
					);
					break;
				default:
					return (
						<Button key={index} content={button}
							click={() => this.changeInput(button)} />
					);
			}
		})
	}

	render() {
		return (
			<div className="calculator" >
				<div className="cal-input">{this.state.input}</div>
				{this.renderList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		buttons: state.buttons
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addResult: addResult }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);