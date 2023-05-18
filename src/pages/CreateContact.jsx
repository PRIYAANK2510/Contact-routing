import { useState } from 'react';

/* eslint-disable react/prop-types */
const CreateContact = ({ handleSubmit }) => {
	const [input, setInput] = useState({
		cname: '',
		email: '',
		mobile: 0,
	});
	return (
		<>
			<header>
				<h1 className='header'>Create Contact</h1>
			</header>
			<main className='formmain'>
				<form onSubmit={(e) => handleSubmit(e, input)}>
					<div className='formin'>
						<label>Contact Name</label>
						<input
							type='text'
							value={input.cname}
							onChange={(e) => {
								setInput({ ...input, cname: e.target.value });
							}}
						/>
					</div>
					<div className='formin'>
						<label>Email</label>
						<input
							type='text'
							value={input.email}
							onChange={(e) => {
								setInput({ ...input, email: e.target.value });
							}}
						/>
					</div>
					<div className='formin'>
						<label>Phone Number</label>
						<input
							type='number'
							value={input.mobile}
							onChange={(e) => {
								setInput({ ...input, mobile: e.target.value });
							}}
						/>
					</div>
					<button
						type='submit'
						className='sbmt-btn'
					>
						Create Contact
					</button>
				</form>
			</main>
		</>
	);
};
export default CreateContact;
