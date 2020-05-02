import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    // transform an object of key pair values (from state BurgerBuilder) into an array of burger ingredients where the value of the object is important to decide how many ingredients are needed, the key is important for the type of ingredient specified
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        });
    }) // reduce flattens the array into a single value
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    // By adding reduce method, can get the length of the array according to the value set in each state ingredient, instewad of the array having empty elements, in which case you would always have a length of 4 even if set to 0 (salad:0,meat:0,cheese:0,bacon:0)
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please pick some ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;