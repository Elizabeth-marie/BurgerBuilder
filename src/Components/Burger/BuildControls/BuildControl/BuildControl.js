import React from 'react'

import classes from './BuildControl.css'

const BuildControl = (props) => (

  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.ingredientRemoved}
      disabled={props.disabled}>Remove</button>
    <button
      className={classes.More}
      onClick={props.ingredientAdded}>Add</button>
  </div>
)

export default BuildControl