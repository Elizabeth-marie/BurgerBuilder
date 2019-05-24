import React, { Component } from 'react'
import Aux from '../../hoc/aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  bacon: 1,
  meat: 1.5,
  cheese: 0.4,
  salad: 0.2,
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })


  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]

    if (oldCount <= 0) {
      return
    }

    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceSubtraction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceSubtraction

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  render() {
    const disabledButton = {
      ...this.state.ingredients
    }
    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledButton} />
      </Aux>
    )
  }
}

export default BurgerBuilder