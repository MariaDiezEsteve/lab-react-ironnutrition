import React from 'react'
import {useState} from "react"

function Search(props) {
  const [search, setSearch] = useState("")
  const {searchFoodProps }= props

  const handleSearch = (event) =>{
    setSearch(event.target.value)
    searchFoodProps(event.target.value)
 }
 

  return (
    <div>
        <form>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" onChange={handleSearch} value={search}/>   
        </form>
    </div>
  )
}

export default Search