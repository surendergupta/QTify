import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import styles from './Search.module.css';
const Search = () => {
  return (
    <div className={ styles.searchContainer}>
      <input type='text' className={ styles.searchInput } placeholder='Search a album of your choice' />
      <button type='button' className={styles.searchBtn}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search