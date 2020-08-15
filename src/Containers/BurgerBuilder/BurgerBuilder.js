
import React, {Component} from 'react'
import Aux from '../../hod/Aux';
import Burger from '../../Components/Burger/Burger'
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';


const Ingredient_prices = {
    salad: 0.3,
    meat: 0.9,
    bacon : 0.7,
    cheese: 0.4
  }

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            'meat' : 0,
            'cheese' : 0,
            'bacon': 0,
            'salad': 0
        },
        totalPrice : 0,
        purchasable: false,
        showOrderSummary: false
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        updatedIngredients[type] = updatedCount;
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : this.state.totalPrice + Ingredient_prices[type]
        }); 
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount -  1;
        updatedIngredients[type] = updatedCount;
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : this.state.totalPrice - Ingredient_prices[type]
        });
        this.updatePurchasable(updatedIngredients);
    }

    
    enableOrderSummaryModal = () => {
        this.setState({
            showOrderSummary: true
        })
    }

    disableOrderSummaryModal = () => {
        this.setState({
            showOrderSummary: false
        })
    }

    updatePurchasable(ingredients) {
         const currentIngredients = {
             ...ingredients
         }
         
         const sum = Object.keys(currentIngredients)
                    .map( keyForIngredient => {
                        return currentIngredients[keyForIngredient];
                    })
                    .reduce( (intialSum, currentVal) => {
                            return intialSum + currentVal;
                    }, 0)
         this.setState({
             purchasable : sum > 0
         })           
    }

    purchaseCancelled = () => {
        this.setState({
            showOrderSummary: false
        })
    }

    purchaseContinued = () => {
        alert('You continue!');
    }

    render() {

        let disabledInfoForIngredients = {
            ...this.state.ingredients
        }

        for( let key in disabledInfoForIngredients) {
            disabledInfoForIngredients[key] = disabledInfoForIngredients[key] <=0 ;
        }

        return (
            <Aux>
                <Modal show = {this.state.showOrderSummary} modalClosed = {this.disableOrderSummaryModal}>
                    <OrderSummary 
                    totalPrice = {this.state.totalPrice}
                    ingredients = {this.state.ingredients} 
                    purchaseCancelled = {this.purchaseCancelled}
                    purchaseContinued = {this.purchaseContinued}
                    />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerControls 
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                    ingredientsDisabledInfo = {disabledInfoForIngredients}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    clicked = {this.enableOrderSummaryModal}
                />
            </Aux>
        );

    }

}


export default BurgerBuilder;