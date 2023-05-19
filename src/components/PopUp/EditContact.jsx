/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';
import FormInput from '../FormInput/FormInput';
import styles from './Popup.module.css';

const EditContact = () => {
	const { setIsEdit, handleEdit, contacts, isEdit } = useContext(DataContext);
	const contact = contacts.filter((contact) => contact.cid === isEdit)[0];
	const [objInp, setObjInp] = useState({ ...contact });
	return (
		<div className={styles.popupwindow}>
			<form
				className={styles.formwindow}
				onSubmit={() => handleEdit(objInp)}
			>
				<h1>Edit Contact</h1>

				<FormInput
					label={'Edit Name'}
					type={'text'}
					value={objInp.cname}
					onChange={(e) => setObjInp({ ...objInp, cname: e.target.value })}
					errorMessage={'Required Field and no number allowed'}
					pattern="[A-ZÀ-ÿ-,a-z. ']{2,}"
					required={true}
				/>
				<FormInput
					label={'Edit Email'}
					type={'email'}
					value={objInp.email}
					onChange={(e) => setObjInp({ ...objInp, email: e.target.value })}
					errorMessage={'Invalid Email Address'}
					pattern='.+@[A-Z a-z]+[.]{1}[A-Z a-z]+'
					required={true}
				/>
				<FormInput
					label={'Edit Mobile'}
					type={'tel'}
					value={objInp.mobile}
					onChange={(e) => setObjInp({ ...objInp, mobile: e.target.value })}
					errorMessage={'10-Digit Mobile number required'}
					pattern='\d{10}'
					required={true}
				/>
				<div className={styles.btnsection}>
					<button
						className={styles.cancelbtn}
						onClick={() => setIsEdit(0)}
					>
						Cancel
					</button>
					<button
						className={styles.editbtn}
						type='submit'
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};
export default EditContact;
