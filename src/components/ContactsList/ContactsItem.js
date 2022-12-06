import PropTypes from 'prop-types';
import { Name, PhoneLink, Button } from './ContactItems.styled';
export const ContactsItems = ({ name, number, onDelete }) => {
  return (
    <>
      <Name children={name} />
      <PhoneLink href="tel:{number}" children={number} />

      <Button type="button" onClick={() => onDelete(name)} children="delete" />
    </>
  );
};

ContactsItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
