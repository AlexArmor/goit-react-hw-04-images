import { useState } from 'react';
import {
  SearchSection,
  SearchForm,
  SearchFormBtn,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onFormSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(searchValue);
    event.target.reset();
  };

  return (
    <SearchSection>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormBtn>
        <SearchFormInput
          onChange={inputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchSection>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
