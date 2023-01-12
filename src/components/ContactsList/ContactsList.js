import { ContactsItems } from './ContactsItem';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContact);

  return (
    <>
      {contacts.length === 0 ? (
        <p>There is no such contact in your phonebook</p>
      ) : (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactsItems id={id} name={name} number={number} />
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
