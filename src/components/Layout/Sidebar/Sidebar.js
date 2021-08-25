import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';


function Sidebar() {

  let [isOpen, toggleOpen] = useState(true);

  return (
    <aside className={classNames(classes.sidebar, isOpen ? null : classes.close)}>
      <button className={classes.sidebar_btn} onClick={() => { toggleOpen(!isOpen) }}></button>
    </aside >
  )
}

export default Sidebar