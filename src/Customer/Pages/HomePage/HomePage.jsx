import React from 'react'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import {e_vehicles} from '../../../Data/E_vehicles'

const HomePage = () => {

    // console.log("Vehicles Data - ", e_vehicles);

    return (
    <div>
        <MainCarousel/>

        <div className=' p-5 sm:py-10 lg:py-20  lg:px-10 box-border '>
            <HomeSectionCarousel   data={e_vehicles}/>
        </div>

        

    </div>
  )
}

export default HomePage