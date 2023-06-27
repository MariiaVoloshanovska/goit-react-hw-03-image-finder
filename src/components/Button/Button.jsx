// import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ nextPage }) {
  return (
    <button className={styles.Button} type="button" onClick={nextPage}>
      Load more
    </button>
  );
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
