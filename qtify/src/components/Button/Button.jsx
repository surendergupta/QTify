import React from 'react';
import Button from '@mui/material/Button';
import styles from './Button.module.css';
const MyButton = ({children}) => {
  return (
    <Button varient="contained" className={styles.button}>{children}</Button>
  )
}

export default MyButton