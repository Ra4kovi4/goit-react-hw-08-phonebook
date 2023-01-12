import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Container } from './App.styled';
import { ContactForm } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from 'constants/GlobalStyle';
import { selectContacts, selectLoader, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading ? Loading.dots() : Loading.remove()}
      {error && <p>Oops, something went wrong...Please try again</p>}
      {contacts.length !== 0 && <ContactsList />}
      <GlobalStyle />
    </Container>
  );
};
