import { ContactsItems } from './ContactsItem';
import { FailedMessage, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <FailedMessage>
          There is no such contact in your phonebook
        </FailedMessage>
      ) : (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactsItems id={id} name={name} number={number} />
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
