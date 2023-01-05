import PropTypes from 'prop-types';
import { Name, PhoneLink, Button } from './ContactItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItems = ({ name, number }) => {
  const dispatch = useDispatch();
  const handlerDelete = () => dispatch(deleteContact(name));
  return (
    <>
      <Name children={name} />
      <PhoneLink href="tel:{number}" children={number} />

      <Button type="button" onClick={handlerDelete} children="delete" />
    </>
  );
};

ContactsItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
