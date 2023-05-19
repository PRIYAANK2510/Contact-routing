/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import EditContact from '../components/PopUp/EditContact';
import DataContext from '../context/DataContext';
import styles from './Home.module.css';

const Home = () => {
	const { isEdit, contacts } = useContext(DataContext);
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>Contact List</h1>
				<Link to={'/create-contact'}>
					<button className={styles.button}>Add Contact</button>
				</Link>
			</header>
			<main className={styles.main}>
				{contacts.map((contact, index) => (
					<Contact
						key={`contact${index}`}
						contact={contact}
					/>
				))}
				{isEdit !== 0 && <EditContact />}
			</main>
		</>
	);
};
export default Home;
