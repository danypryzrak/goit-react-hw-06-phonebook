import Form from "./Form/Form";
import { nanoid } from "nanoid";
import ContactsList from 'components/Contacts/ContactsList'
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { addContactsAction } from "redux/contacts/contactsSlice";
import { getContacts } from "../redux/contacts/contactsSelector";

export const App = () =>{

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ number, name }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContactsAction(contact));
  };

    return (
      <>
        <h1>Phonebook</h1>
        <Form handleSubmit={handleSubmit} contacts={contacts}></Form>

        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
    </>
    )
    
  }

