import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  return (
    <header className={styles.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
