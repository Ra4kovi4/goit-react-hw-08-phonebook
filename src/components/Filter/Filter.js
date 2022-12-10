import PropTypes from 'prop-types';

import { FilterLabel, FilterInput, SearchIcon } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel htmlFor="filter">
      <SearchIcon />
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
