import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { ContactForm } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from 'constants/GlobalStyle';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem(LS_KEY))
  );
  const [filter, SetFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (!savedContacts) {
      return;
    }
    setContacts(JSON.parse(savedContacts));
  }, []);
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isIncludeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = contacts.some(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isIncludeName) {
      return Report.failure('', `${name} is already in contact`);
    } else if (isIncludeNumber) {
      const { name } = contacts.find(contact => contact.number === number);
      return Report.failure('', `${number} is already in contact as ${name}`);
    }
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };
  const handlerChangeFilter = e => {
    SetFilter(e.target.value);
  };

  const deleteContact = name => {
    setContacts(prevContacts =>
      prevContacts.filter(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      )
    );
  };
  const normiliseName = filter.toLowerCase();
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normiliseName)
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {contacts.length !== 0 && (
        <Filter value={filter} onChange={handlerChangeFilter} />
      )}
      {contacts.length !== 0 ? (
        <h2>Contacts</h2>
      ) : (
        <h2>Please add the contact to your phonebook</h2>
      )}
      {filteredContact.length === 0 && contacts.length !== 0 ? (
        <p>There is no such contact in your phonebook</p>
      ) : (
        <ContactsList
          contacts={filteredContact}
          onDeleteContacts={deleteContact}
        />
      )}

      <GlobalStyle />
    </Container>
  );
};
