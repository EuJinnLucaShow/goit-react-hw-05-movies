import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';
import { Wrapper, Icon } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  return (
    <Wrapper>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
      <Icon />
    </Wrapper>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
