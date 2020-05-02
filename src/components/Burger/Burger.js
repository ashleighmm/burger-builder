import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    // transform an object of key pair values (from state BurgerBuilder) into an array of burger ingredients where the value of the object is important to decide how many ingredients are needed, the key is important for the type of ingredient specified
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;