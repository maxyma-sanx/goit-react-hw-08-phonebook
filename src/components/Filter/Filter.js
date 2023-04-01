import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterInput
        name="filterInput"
        type="text"
        placeholder=" "
        onChange={e => dispatch(setFilter(e.target.value))}
      ></FilterInput>
      <FilterLabel>Find contacts by name</FilterLabel>
    </FilterContainer>
  );
};
