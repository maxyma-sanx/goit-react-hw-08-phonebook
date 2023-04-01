import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';
import { Social } from 'components/Social';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Add contact" headerContent={<Social />}>
        <ContactForm />
      </Section>

      {contacts.length > 0 && (
        <Section title="Contacts" headerContent={<Filter />}>
          <ContactList />
        </Section>
      )}
    </>
  );
};
