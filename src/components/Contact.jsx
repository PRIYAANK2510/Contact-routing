/* eslint-disable react/prop-types */
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const Contact = ({ contact }) => {
	return (
		<div className='contact'>
			<div>
				<p>{contact.cname}</p>
				<p>{contact.email}</p>
				<p>{contact.mobile}</p>
			</div>

			<div>
				<MdDelete className='icon' />
				<FaUserEdit className='icon' />
			</div>
		</div>
	);
};
export default Contact;
