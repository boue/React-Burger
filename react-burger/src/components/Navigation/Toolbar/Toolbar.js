import React from 'react';

//imports strings to be scoped to this component css modules
import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>...</nav>
  </header>
);

export default toolbar;