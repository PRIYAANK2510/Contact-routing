import Contact from './Contact';

const ContactList = ({ contacts }) => {
	return contacts.map((contact, index) => (
		<Contact
			key={`contact${index}`}
			contact={contact}
		/>
	));
};
export default ContactList;
