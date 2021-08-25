import React from 'react';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <button className={classes.button}><b>Ваш баланс:</b> 350.00 ₽</button>
      <button className={classes.button}><b>Аккаунт:</b> @stasvalov</button>
    </header>
  )
}

export default Header