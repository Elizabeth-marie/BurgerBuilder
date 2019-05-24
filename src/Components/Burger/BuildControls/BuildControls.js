import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        ingredientAdded={() => props.ingredientAdded(ctrl.type)} />
    ))}
  </div>
)

export default BuildControls