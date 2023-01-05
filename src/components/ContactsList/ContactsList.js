import { ContactsItems } from './ContactsItem';
import { Item } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const normiliseName = filter.toLowerCase();
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normiliseName)
  );

  return (
    <>
      {filteredContact.length === 0 && contacts.length !== 0 ? (
        <p>There is no such contact in your phonebook</p>
      ) : (
        <ul>
          {filteredContact.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactsItems name={name} number={number} />
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
