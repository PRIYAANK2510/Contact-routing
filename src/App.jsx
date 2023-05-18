import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';

function App() {
	let navigate = useNavigate();
	const [isEdit, setIsEdit] = useState(0);
	const [contact, setContact] = useState([
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
		if (contact.length !== 0) {
			cid = contact[contact.length - 1].cid + 1;
		}
		setContact([...contact, { ...obj, cid: cid }]);
		navigate('/');
	};
	const handleDelete = (cid) => {
		const afterDel = contact.filter((con) => {
			return cid !== con.cid;
		});
		setContact(afterDel);
	};
	const handleEdit = (obj) => {
		const afterEdit = contact.map((con) => {
			if (con.cid === obj.cid) {
				return obj;
			}
			return con;
		});
		setContact(afterEdit);
		setIsEdit(0);
	};
	return (
		<>
			<PageRoutes
				contacts={contact}
				handleSubmit={handleSubmit}
				handleDelete={handleDelete}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				handleEdit={handleEdit}
			/>
		</>
	);
}

export default App;
