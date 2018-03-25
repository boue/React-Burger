import React from 'react';

//imports strings to be scoped to this component css modules
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>    
      <Logo />
    </div>  
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;