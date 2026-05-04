import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
   const [darkMode, setDarkMode] = useState(false)

   const [cartItems, setCartItems] = useState([])
   const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
   }
   
   const [selectedCategory, setSelectedCategory] = useState('all')
   const handleCategoryChange = (e) =>{
    setSelectedCategory(e.target.value)
   }

  return (

    <div  style={{ background: darkMode ? '#222' : '#fff', minHeight: '100vh', color: darkMode ? '#eee' : '#111'}}>
      <h1>🛒 Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
   
      <label>Filter by Category: </label>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart ={handleAddToCart}
       selectedCategory = {selectedCategory}
      />

      <Cart cartItems = {cartItems} />

    </div>
  )
}

export default App
