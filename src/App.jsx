import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
