/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, type, value, onChange, errorMessage, ...inputProps }) => {
	const [focused, setFocused] = useState(false);
	const handleFocus = () => {
		setFocused(true);
	};
	return (
		<div className={styles.input_group}>
			<label className={styles.label}>{label}</label>
			<input
				{...inputProps}
				className={styles.inputbox}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={handleFocus}
				focused={focused.toString()}
			/>
			<span className={styles.error}>{errorMessage}</span>
		</div>
	);
};
export default FormInput;
