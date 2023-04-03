import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Formik, Field } from 'formik';
import { Form, FormField, AddBtn } from './ContactForm.styled';
import { addContact } from 'Redux/Operations';

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = () => {
    const dispatch = useDispatch();
    return <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
            dispatch(addContact({
                ...values
            }))
            resetForm();
        }}
    >
        <Form>
            < FormField>Name
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></ FormField>
            < FormField>Number
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </ FormField>
            <AddBtn type="submit">Add contact</AddBtn>
        </Form>
    </Formik>
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}