import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price}</strong></p>
    {controls.map(ctl => (
      <BuildControl 
        added={() => props.ingredientAdded(ctl.type)}
        disabled={props.disabled[ctl.type]}
        key={ctl.label} 
        label={ctl.label} 
        removed={() => props.ingredientRemoved(ctl.type)} />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;