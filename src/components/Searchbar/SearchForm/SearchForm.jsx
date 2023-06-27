import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('You have not entered anything');
    }

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          onChange={this.handleInputChange}
          name="value"
          value={this.state.value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
