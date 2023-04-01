import { AiOutlineUserAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  LabelContainer,
  Label,
  InputContainer,
  Input,
  Button,
} from './ContactForm.styled';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const currentName = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (currentName) {
      console.log(currentName);
      alert(`${currentName.name} is already exist!`);
      return;
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <LabelContainer>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Input>
          <Label htmlFor="name">Name</Label>
        </LabelContainer>

        <LabelContainer>
          <Input
            type="tel"
            id="number"
            name="number"
            placeholder=" "
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
          <Label>Number</Label>
        </LabelContainer>
      </InputContainer>
      <Button>
        <AiOutlineUserAdd />
        Add contact
      </Button>
    </Form>
  );
};
