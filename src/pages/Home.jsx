/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';

const Home = ({ contacts }) => {
	return (
		<>
			<header>
				<h1 className='header'>Contact List</h1>
				<Link to={'/create-contact'}>
					<button className='add-btn'>Add Contact</button>
				</Link>
			</header>
			<main>
				<ContactList contacts={contacts} />
			</main>
		</>
	);
};
export default Home;
