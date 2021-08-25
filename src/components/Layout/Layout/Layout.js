import React from 'react';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.layout}>
      {props.sidebar}
      <main className={classes.main}>
        <div className={classes.header}>
          {props.header}
        </div>
        <div className={classes.content}>
          {props.content}
        </div>
      </main>
    </div>
  )
}

export default Layout