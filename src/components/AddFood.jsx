import React from 'react'
import {useState} from "react"

function AddFood(props) {
    const {addFoodProps} = props

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [quantity, setQuantity] = useState(0)

const handleNameChange = (event) => setName(event.target.value)
const handleImageChange = (event) => setImage(event.target.value)
const handleCaloriesChange = (event) => setCalories(event.target.value)
const handleQuantityChange = (event) => setQuantity(event.target.value)

const handleSubmit = (event) => {
    event.preventDefault()

    const newFood = {
        name,
        image,
        calories,
        quantity
    }

    setName("")
    setImage("")
    setCalories(0)
    setQuantity(0)

    addFoodProps(newFood)

    console.log(newFood)
}

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={handleNameChange} />
                <hr />
            <label htmlFor="image">Image:</label>
            <input type="text" name='image' onChange={handleImageChange} />
                <hr />
            <label htmlFor="calories">Calories:</label>
            <input type="number" name='calories' onChange={handleCaloriesChange} />
                <hr />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name='quantity' onChange={handleQuantityChange} />
                <hr />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddFood