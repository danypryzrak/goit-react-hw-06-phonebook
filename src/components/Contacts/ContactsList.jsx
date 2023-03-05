import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { deleteContactsAction } from 'redux/contacts/contactsSlice';

const ContactsList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

return (
    <>
    <ul className=''>
        {contacts.length ? (
        contacts.map(contact => (
            <li key={contact.id} className=''>
            <p>
                <span>{contact.name}:{contact.number}</span>
            </p>
            <button
                type="button"
                onClick={() => dispatch(deleteContactsAction(contact.id))}
                className=''
            >
                Delete
            </button>
            </li>
        ))
        ) : (
        <p>There are no contacts here</p>
        )}
    </ul>
    </>
);
};

export default ContactsList

