import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  return (
    <div>
      <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="bread-bottom" />
      </div>
    </div>
  );
};

export default burger;