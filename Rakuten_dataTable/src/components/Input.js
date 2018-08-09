import React, { Component } from 'react';

export default function Input(props) {

	const { label, value, onChange, onBlur, stateKey, required, error } = props;

	const className = `form-control ${ error ? 'is-invalid' : ''}`;
	// touched && 
	return (
		<div className="form-group">
			<label>{label}<span className="required">{required}</span></label>
			<input
				className={className} type="text"
				value={value}
				onChange={(e) => onChange(stateKey, e)}
				onBlur={onBlur}
			/>
			<div className="invalid-feedback">{error}</div>
		</div>
	);
}