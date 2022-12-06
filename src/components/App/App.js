import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from 'constants/GlobalStyle';

const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.contacts);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }
  handlerChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  addContact = values => {
    const { name, number } = values;
    const { contacts } = this.state;
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
      Report.failure('', `${name} is already in contact`);
    } else if (isIncludeNumber) {
      const { name } = contacts.find(contact => contact.number === number);
      Report.failure('', `${number} is already in contact as ${name}`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };
  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      ),
    }));
  };
  onFilterContact = () => {
    const { contacts, filter } = this.state;
    const normiliseName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normiliseName)
    );
  };
  render() {
    const { filter } = this.state;
    const filterList = this.onFilterContact();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {filterList.length !== 0 && (
          <Filter value={filter} onChange={this.handlerChangeFilter} />
        )}
        {filterList.length !== 0 ? (
          <h2>Contacts</h2>
        ) : (
          <h2>Please add the contact to your phonebook</h2>
        )}

        <ContactsList
          contacts={filterList}
          onDeleteContacts={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
