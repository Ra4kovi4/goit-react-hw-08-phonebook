import PropTypes from 'prop-types';
import { Name, PhoneLink, Button } from './ContactItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handlerDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Name>
        {name}: {number}
      </Name>
      <PhoneLink href="tel:{number}">call</PhoneLink>

      <Button type="button" onClick={handlerDelete}>
        delete
      </Button>
    </>
  );
};

ContactsItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
