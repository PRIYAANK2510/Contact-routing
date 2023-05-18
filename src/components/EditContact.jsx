import { useState } from 'react';

/* eslint-disable react/prop-types */
const EditContact = ({ setIsEdit, contact, handleEdit }) => {
	const [objInp, setObjInp] = useState({ ...contact });
	return (
		<div className='editContact'>
			<div className='editform'>
				<h1>Edit Form</h1>
				<div className='editdiv'>
					<label>Edit Name</label>
					<input
						type='text'
						value={objInp.cname}
						onChange={(e) => setObjInp({ ...objInp, cname: e.target.value })}
					/>
				</div>
				<div className='editdiv'>
					<label>Edit Email</label>
					<input
						type='text'
						value={objInp.email}
						onChange={(e) => setObjInp({ ...objInp, email: e.target.value })}
					/>
				</div>
				<div className='editdiv'>
					<label>Edit Number</label>
					<input
						type='number'
						value={objInp.mobile}
						onChange={(e) => setObjInp({ ...objInp, mobile: e.target.value })}
					/>
				</div>
				<div className='editdivbtn'>
					<button
						className='canceledit'
						onClick={() => setIsEdit(0)}
					>
						Cancel
					</button>
					<button
						className='updateedit'
						onClick={() => handleEdit(objInp)}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditContact;
