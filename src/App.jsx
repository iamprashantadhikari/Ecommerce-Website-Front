import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/products'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <Products />
    </div>
  )
}

export default App