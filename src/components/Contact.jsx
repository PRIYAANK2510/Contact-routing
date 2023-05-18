/* eslint-disable react/prop-types */
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const Contact = ({ contact, handleDelete, setIsEdit }) => {
	return (
		<div className='contact'>
			<div>
				<p>{contact.cname}</p>
				<p>{contact.email}</p>
				<p>{contact.mobile}</p>
			</div>

			<div>
				<MdDelete
					className='icon'
					onClick={() => {
						handleDelete(contact.cid);
					}}
				/>
				<FaUserEdit
					className='icon'
					onClick={() => setIsEdit(contact.cid)}
				/>
			</div>
		</div>
	);
};
export default Contact;
