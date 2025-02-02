import React, { Fragment, useState, useEffect } from 'react'
import HomePage from './HomePage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import ProductsPage from './ProductsPage'
import ProductsDetailsPage from './ProductsDetailsPage'
import CartPage from './CartPage'
import LogInPage from './LogInPage'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const App = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalUnits, setTotalUnits] = useState(0)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<RootLayout cart={cart} />}>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='productDetails/:productName' element={<ProductsDetailsPage setCart={setCart} />} />
        <Route path='cart' element={<CartPage setCart={setCart} total={total} setTotal={setTotal} totalUnits={totalUnits} setTotalUnits={setTotalUnits} />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Route>
      <Route path='login' element={<LogInPage />} />
    </Fragment>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App