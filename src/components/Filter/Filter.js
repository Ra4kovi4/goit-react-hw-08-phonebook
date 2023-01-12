import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { FilterLabel, FilterInput, SearchIcon } from './Filter.styled';
import { selectFilters } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const handlerFilter = e => dispatch(setFilter(e.target.value));
  return (
    <FilterLabel htmlFor="filter">
      <SearchIcon />
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={handlerFilter}
      />
    </FilterLabel>
  );
};
