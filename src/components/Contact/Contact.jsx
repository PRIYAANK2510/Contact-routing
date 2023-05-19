/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DataContext from '../../context/DataContext';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
	const { handleDelete, setIsEdit } = useContext(DataContext);
	return (
		<div className={styles.contact}>
			<div>
				<p>
					<span className={styles.contactheading}>Name: </span>
					{contact.cname}
				</p>
				<p>
					<span className={styles.contactheading}>Email: </span>
					{contact.email}
				</p>
				<p>
					<span className={styles.contactheading}>Mobile: </span>
					{contact.mobile}
				</p>
			</div>

			<div>
				<MdDelete
					className={styles.deleteicn}
					onClick={() => {
						handleDelete(contact.cid);
					}}
				/>
				<FaUserEdit
					className={styles.editicn}
					onClick={() => setIsEdit(contact.cid)}
				/>
			</div>
		</div>
	);
};
export default Contact;
