import React from 'react';
import foods from '../foods.json';
import {useState} from "react"
import FoodItems from "../components/FoodItems.jsx"
import AddFood from '../components/AddFood'
import Search from '../components/Search';
import FoodTotal from '../components/FoodTotal';

function Comida() {
  const [food, setFood] = useState(foods)
  const [showForm, setShowForm] = useState(false)
  const [filterFood, setFilterFood] = useState(foods)
  const [totalFood, setTotalFood] = useState([])

  function addFood(addMeat){
    setShowForm(false)
    setFood([...food, addMeat])
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  const searchFood = (foodToSearch) => {
    const filterFood = food.filter((eachFood) => {
      return eachFood.name.toUpperCase().includes(foodToSearch.toUpperCase())
    })
    setFilterFood(filterFood)
  }

  const addFoodTotal = (food) => {
    setTotalFood([...totalFood, food])
  }

  return (
    <div>
      <h1>List Food</h1>

      <button onClick={handleShowForm}>See Form</button>
      {showForm === true && <AddFood addFoodProps={addFood}/>}
     <br />
      <Search searchFoodProps={searchFood}/>
     <br />
      <FoodTotal mealTotalProps={totalFood}/>
     <br />
        {
          filterFood.map((eachFood, index) => {
            return(
              <div>
              <div className="food">
                 <FoodItems key= {eachFood.name + index} food={eachFood} mealProps={addFoodTotal} />
              </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Comida