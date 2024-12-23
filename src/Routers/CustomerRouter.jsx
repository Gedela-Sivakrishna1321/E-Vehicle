import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Navigation from '../Customer/Components/Navigation/Navigation'
// import Footer from '../Customer/Components/Footer/Footer'
import ProductPage from '../Customer/Pages/ProductPage'
import ContactPage from '../Customer/Pages/ContactPage'
import Spares from '../Customer/Pages/Spares'
import Labs from '../Customer/Pages/Labs'
import CoursePage from '../Customer/Pages/CoursePage'
import DealershipPage from '../Customer/Pages/DealershipPage'
import Gallery from '../Customer/Pages/Gallery'
import AboutUs from '../Customer/Pages/AboutUs'

const Footer = lazy(() => import('../Customer/Components/Footer/Footer'))


const CustomerRouter = () => {
  return (
    <div className=''>

        <div>
            <Navigation/>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<ProductPage/>} />
            <Route path='/contact-us' element={<ContactPage/>} />
            <Route path='/spares' element={<Spares/>} />
            <Route path='/lab-setup' element={<Labs/>} />
            <Route path='/courses' element={<CoursePage/>} />
            <Route path='/dealership' element={<DealershipPage/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/about-us' element={<AboutUs/>} />
        </Routes>



          <Suspense>

             <Footer/>
          
          </Suspense>

   
   
    </div>
  )
}

export default CustomerRouter