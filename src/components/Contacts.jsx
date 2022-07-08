import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast';
import { Button } from '@mui/material';

import { useModal } from '../Hooks/useModal';
import { useLocalStorage } from '../Hooks/useLocalStorage';

import { remadeNumber } from "../services/remadeNumber";
 
import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import { Modal } from './Modal';
import { ContactProfile } from './ContactProfile';
import { MainHeaderContainer } from './Contacts.styled';

import { contactList } from '../data/contactList';

const LS_KEY = 'phonebook';

function Contacts () {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, contactList)
  const [filter, setFilter] = useState('');
  const [chosenContact, setChosenContact] = useState(null);
  const [showModal, toggleModal] = useModal(false);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    remadeNumber(number)

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in the contact list`);
      return;
    };

    if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} is already in the contact list`);
      return;
    };

    const newContact = {
      name: name,
      number: remadeNumber(number),
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, newContact]);
    toast.success('Contact is added');

  };

  const deleteContact = contactId => {
    setContacts(prevState => [...prevState.filter(contact => contact.id !== contactId)])
  };

  const filterContacts = (e) => {
    setFilter(String(e.target.value));
  };

  function getContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  function chooseContact (contactId) {
    setChosenContact(contacts.filter(contact => contact.id === contactId));
  }

  return (
    <>
      <MainHeaderContainer>
        <h2>Phonebook</h2>
        <Button variant="contained" onClick={toggleModal}>Add Contact</Button>
      </MainHeaderContainer>
      <div>
        {showModal && 
          <Modal onClose={toggleModal}>
            <ContactForm formSubmit={addContact} onClick={toggleModal}/>
          </Modal>}

        <div style={{ maxWidth: '300px' }}>
          <Filter onChange={filterContacts} />
          <ContactList onChoose={chooseContact} contacts={getContacts()} onClick={deleteContact}/>
        </div>
        {chosenContact && <ContactProfile contact={chosenContact}/>}
      </div>
    </>
  );
};

export default Contacts;