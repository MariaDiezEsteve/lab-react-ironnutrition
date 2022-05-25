import React from 'react'
import {useState} from "react"


function FoodItems(props) {
  const [quantity, setQuantity] = useState(0)
  const {name, calories, image} = props.food
  const {mealProps} = props

  const handleChange = (event) => setQuantity(event.target.value)

  const handleClick = (event) => {

    let totalCalories = quantity * calories

    const theFood = {
      name, 
      image,
      calories, 
      quantity,
      totalCalories
    }

    mealProps(theFood)

    setQuantity(0)

  }

  return (
    <div>
      <div className="food">
      <img src={image} alt="imagenfood" width={55} /> &nbsp; &nbsp; 
        <p><strong>{name}</strong></p> &nbsp; &nbsp; 
        <p><small>{calories}</small></p> &nbsp; &nbsp; 
        <input type="number" name="quantity" width={10} onChange={handleChange} value={quantity}/> 
        <button onClick={handleClick}>+</button>
    </div>
    </div>
  )
}

export default FoodItems