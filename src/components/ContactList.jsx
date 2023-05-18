import Contact from './Contact';

const ContactList = ({ contacts, handleDelete, setIsEdit }) => {
	return contacts.map((contact, index) => (
		<Contact
			key={`contact${index}`}
			contact={contact}
			handleDelete={handleDelete}
			setIsEdit={setIsEdit}
		/>
	));
};
export default ContactList;
