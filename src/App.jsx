import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';

function App() {
	let navigate = useNavigate();
	const [contact, setContact] = useState([
		{
			cname: 'Priyaank',
			email: 'priyaank@gmail.com',
			mobile: '8473628291',
		},
		{
			cname: 'john',
			email: 'john@gmail.com',
			mobile: '8212313491',
		},
	]);
	const handleSubmit = (e, obj) => {
		e.preventDefault();
		setContact([...contact, obj]);
		navigate('/');
	};
	return (
		<>
			<PageRoutes
				contacts={contact}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default App;
