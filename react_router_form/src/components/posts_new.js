import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
		
		const CustomTag = field.type;
		return (
				<div className="form-group" >
					<label>{field.label}</label>
					<CustomTag
						className={className}
						type="text"
						rows="10"
						// a property spread notation in JSX, with whole pre-generated event handlers
						// like onChange={field.input.onCahnge}
						{...field.input}
					/>
					<div className="invalid-feedback">
						{ touched ? error : ''}
					</div>
				</div>
			);
	}
	
	onSubmit(values) {
		// console.log(values);
		// make a callback to wait for the post to be created
		document.querySelector('#newLoader').style.display = 'block';
		document.querySelector('form').style.display = 'none';
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		// a property of this.props (ES6 syntax)
		const { handleSubmit } = this.props;

		return (
			<Fragment>
			<div className="loader" id="newLoader" style={{display: 'none'}}></div>
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field 
					label="標題"
					// the name property is a piece of state
					type="input"
					name="title"
					component={this.renderField}
				/>
				<Field 
					label="作者"
					type="input"
					name="categories"
					component={this.renderField}
				/>
				<Field 
					label="簡介"
					type="textarea"
					name="content"
					component={this.renderField}
				/>
				<div className="btn-container">
					<Link to="/" className="btn btn-danger">取消</Link>
					<button type="submit" className="btn btn-custom">新增</button>
				</div>
			</form>
			</Fragment>
		);
	}
}

function validate(values) {
	const errors = {};
	
	// Validate the inputs
	if (!values.title) {
		errors.title = "請輸入標題";
	}
	if (!values.categories) {
		errors.categories = "請輸入作者名稱";
	}
	if (!values.content) {
		errors.content = "請輸入圖書簡介";
	}
	
	// If errors is empty, the form is fine to submit
	// If errors has *any* properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({ 
	validate,
	form: 'PostsNewForm' 
})(
	connect(null, { createPost })(PostsNew)
); 