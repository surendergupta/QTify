import React from 'react';
import { Link } from "react-router-dom";
import MyButton from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Navbar.module.css';
const Navbar = ({ searchData }) => {

  return (
      <nav className={styles.navbar}>
          <Link to="/"><Logo /></Link>
          <Search placeholder="" searchData={searchData} />
          <MyButton children="Give Feedback"></MyButton>
      </nav>
  )
}

export default Navbar