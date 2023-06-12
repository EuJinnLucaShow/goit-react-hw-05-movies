import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

export const SearchForm = ({ value, onChange }) => {
  return (
    <div>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
    </div>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
