import PropTypes from 'prop-types';
import { ContactsItems } from './ContactsItem';
import { Item } from './ContactList.styled';
export const ContactsList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactsItems
            name={name}
            number={number}
            onDelete={onDeleteContacts}
          />
        </Item>
      ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContacts: PropTypes.func.isRequired,
};
