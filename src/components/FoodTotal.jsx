import React from 'react'


function FoodTotal(props) {
    
    const {mealTotalProps} = props

    const total = mealTotalProps.reduce((acc, e) => {
        return acc + (e.calories * e.quantity)
    }, 0)

  return (
    <div>
        <h1>Today´s foods</h1>
        {
            mealTotalProps.map((eachFood) => {
                return(
                    <li>{eachFood.name} x {eachFood.quantity}: {eachFood.calories * eachFood.quantity}</li>  
                )
            })
        }

        <p>Total: {total} cal</p>
    </div>
  )
}

export default FoodTotal