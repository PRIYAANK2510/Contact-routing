/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import FormInput from '../components/FormInput/FormInput';
import DataContext from '../context/DataContext';
import styles from './CreateContact.module.css';

const CreateContact = () => {
	const { handleSubmit } = useContext(DataContext);

	const [input, setInput] = useState({
		cname: '',
		email: '',
		mobile: '',
	});
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>Create Contact</h1>
			</header>
			<main className={styles.main}>
				<form
					className={styles.form}
					onSubmit={(e) => handleSubmit(e, input)}
				>
					<FormInput
						label={'Contact Name'}
						type={'text'}
						value={input.cname}
						onChange={(e) => {
							setInput({ ...input, cname: e.target.value });
						}}
						errorMessage={'Required Field and no number allowed'}
						pattern="\b([A-ZÀ-ÿ-,a-z. ']+[ ]*)+"
						required={true}
					/>
					<FormInput
						label={'Email'}
						type={'email'}
						value={input.email}
						onChange={(e) => {
							setInput({ ...input, email: e.target.value });
						}}
						errorMessage={'Invalid Email Address'}
						pattern='.+@[A-Z a-z]+[.]{1}[A-Z a-z]+'
						required={true}
					/>
					<FormInput
						label={'Mobile'}
						type={'tel'}
						value={input.mobile}
						onChange={(e) => {
							setInput({ ...input, mobile: e.target.value });
						}}
						errorMessage={'10-Digit Mobile number required'}
						pattern='\d{10}'
						required={true}
					/>
					<button
						className={styles.submitbtn}
						type='submit'
					>
						Create Contact
					</button>
				</form>
			</main>
		</>
	);
};
export default CreateContact;
