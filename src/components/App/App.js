import { Container } from './App.styled';
import { ContactForm } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from 'constants/GlobalStyle';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
// const LS_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <Filter />}
      {contacts.length !== 0 ? (
        <h2>Contacts</h2>
      ) : (
        <h2>Please add the contact to your phonebook</h2>
      )}

      <ContactsList />

      <GlobalStyle />
    </Container>
  );
};
