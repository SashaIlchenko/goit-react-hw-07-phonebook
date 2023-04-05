import { fetchContacts } from 'Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { selectIsLoading, selectError } from 'Redux/Selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  return (<Container ><h1>Phonebook</h1>
    <ContactForm />
    {isLoading && !error && <b>Request in progress...</b>}
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </Container >)
}
