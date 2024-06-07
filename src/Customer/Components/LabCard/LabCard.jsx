import React from 'react'
import LabDetailsCard from '../LabDetailsCard/LabDetailsCard'
import { labsData } from '../../../Data/LabData'
import Aos from 'aos';
import 'aos/dist/aos.css'

const LabCard = ({labData}) => {

  React.useEffect(() => {
    Aos.init({once : true});
  }, [])

  const specs = labData.specs.replace(/"/g, '').split("+");
  // console.log("Specs Split Data = ", specs);

  return (
    <div 
    data-aos = "fade-right"
    className='w-full bg-white rounded-3xl flex flex-col lg:flex-row lg:justify-between lg:p-[3%] lg:items-center space-y-10 sm:p-[5%] p-[7%]'>
        {/* Details */}
        <div className=''>
            <p className='text-xl font-bold'>{labData.index.replace(/"/g, '')}.</p>
            <h1 className=' text-3xl sm:text-4xl text-red-500 font-bold '>{labData.name} </h1>
            <LabDetailsCard labSpecs={specs} price={labData.price} />
            
        </div>

        {/* Image */}
        <div className='lg:w-1/2 flex justify-center items-center'>
            <img 
            className='rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
            src={labData.imageUrl} alt="" />
        </div>
    </div>
  )
}

export default LabCard