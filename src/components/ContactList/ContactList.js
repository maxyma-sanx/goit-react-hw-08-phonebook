import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import {
  ListIcon,
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
  Loading,
} from './ContactList.styled';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/filter/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {!isLoading && !error ? (
        <ContactsTable>
          <thead>
            <tr>
              <ContactsTableHead>Name</ContactsTableHead>
              <ContactsTableHead>Phone number</ContactsTableHead>
              <ContactsTableHead>
                Contacts ({contacts.length})
              </ContactsTableHead>
            </tr>
          </thead>

          <tbody>
            {contacts.map(({ id, name, number }) => {
              return (
                <ContactsTableRow key={id}>
                  <ContactsFlexCeil>
                    <ListIcon>
                      <FaUser size="20" color="white" />
                    </ListIcon>
                    {name}
                  </ContactsFlexCeil>
                  <ContactsTableCeil>{number}</ContactsTableCeil>
                  <ContactsTableCeil>
                    <ListBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <FaTrashAlt size="20" />
                    </ListBtn>
                  </ContactsTableCeil>
                </ContactsTableRow>
              );
            })}
          </tbody>
        </ContactsTable>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};
