import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
                .map(ingregientKey => {
                    return [...Array(props.ingredients[ingregientKey])]
                            .map((_, i) => {
                                 return <BurgerIngredient type = {ingregientKey} key = {ingregientKey + i}/>
                            });
                })
                .reduce( (arr, el) => {
                        return arr.concat(el)
                }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding the ingredients</p>
    }             
  
    console.log(transformedIngredients);
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top" />
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
} 


export default burger;