import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import './ContactForm.scss';

export function ContactForm() {
  const loginInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!contacts) return;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is alredy in contacts`);
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor={loginInputId} className="Form__label">
        Name
        <input
          className="Form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={loginInputId} className="Form__label">
        Number
        <input
          className="Form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="Form__btn" type="submit">
        Add contact
      </button>
    </form>
  );
}
