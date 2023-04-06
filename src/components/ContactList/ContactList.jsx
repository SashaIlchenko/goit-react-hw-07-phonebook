import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactList.styled';
import { deleteContact } from 'Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'Redux/Selectors';
export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    return < ul >
        {contacts.map(contact => (<li key={contact.id}>{contact.name}: {contact.number}<DeleteBtn type='button' onClick={() => dispatch(deleteContact(contact.id))}>Delate</DeleteBtn ></li>))}
    </ul >
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
}