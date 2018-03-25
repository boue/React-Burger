import React from 'react';

import classes from './Button.css';

const button = (props) => (
  <button 
  //btnType will either be Danger or Success
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;