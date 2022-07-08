import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { FilterContainer } from "./Contacts.styled";

export default function Filter ({
  onChange
}){
  return (
    <FilterContainer>
      <h2>Find contacts by name</h2>
      <TextField type="text"
        onChange={onChange}
        label="text name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};