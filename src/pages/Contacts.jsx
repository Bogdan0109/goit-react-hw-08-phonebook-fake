import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading } from 'redux/contacts/selectors';
import { Wrapper } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <Wrapper className="Reviews">
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>
        <div>{isLoading && 'Request in progress...'}</div>
        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </Wrapper>
    </>
  );
}
