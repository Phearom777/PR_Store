import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Search from '../pages/Search'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ProductDetail from '../pages/ProductDetail'
import FavoriteProduct from '../pages/FavoriteProduct'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import About from '../pages/About'
import ImageGallery from '../pages/ImageGallery'
import ScrollToTop from '../pages/ScrollToTop'


const RoutePage = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/product-detail/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<Search />}  />
            <Route path='/favorite' element={<FavoriteProduct />}  />
            <Route path='/shop' element={<Shop />}  />
            <Route path='/contact' element={<Contact />}  />
            <Route path='/about' element={<About />}  />
            {/* <Route path='/image' element={<ImageGallery />}  /> */}
        </Routes>
    </div>
  )
}

export default RoutePage
