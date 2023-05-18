/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';
import EditContact from '../components/EditContact';

const Home = ({ contacts, handleDelete, handleEdit, isEdit, setIsEdit }) => {
	return (
		<>
			<header>
				<h1 className='header'>Contact List</h1>
				<Link to={'/create-contact'}>
					<button className='add-btn'>Add Contact</button>
				</Link>
			</header>
			<main>
				<ContactList
					contacts={contacts}
					handleDelete={handleDelete}
					setIsEdit={setIsEdit}
				/>
				{isEdit !== 0 && (
					<EditContact
						setIsEdit={setIsEdit}
						contact={contacts.filter((contact) => contact.cid === isEdit)[0]}
						handleEdit={handleEdit}
					/>
				)}
			</main>
		</>
	);
};
export default Home;
