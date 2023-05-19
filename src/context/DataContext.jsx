/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes.json';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	let navigate = useNavigate();
	const [isEdit, setIsEdit] = useState(0);
	const [contacts, setContact] = useState([
		{
			cid: 1,
			cname: 'Priyaank',
			email: 'priyaank@gmail.com',
			mobile: '8473628291',
		},
		{
			cid: 2,
			cname: 'john',
			email: 'john@gmail.com',
			mobile: '8212313491',
		},
	]);
	const handleSubmit = (e, obj) => {
		e.preventDefault();
		let cid = 1;
		if (contacts.length !== 0) {
			cid = contacts[contacts.length - 1].cid + 1;
		}
		setContact([...contacts, { ...obj, cid: cid }]);
		navigate(routes.HOME);
	};
	const handleDelete = (cid) => {
		const afterDel = contacts.filter((con) => {
			return cid !== con.cid;
		});
		setContact(afterDel);
	};
	const handleEdit = (obj) => {
		const afterEdit = contacts.map((con) => {
			if (con.cid === obj.cid) {
				return obj;
			}
			return con;
		});
		setContact(afterEdit);
		setIsEdit(0);
	};
	return (
		<DataContext.Provider
			value={{
				contacts,
				isEdit,
				setIsEdit,
				handleDelete,
				handleEdit,
				handleSubmit,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
export default DataContext;
