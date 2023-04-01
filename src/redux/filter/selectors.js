import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from 'redux/contacts/selectors';

const getFilter = state => state.filter.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
