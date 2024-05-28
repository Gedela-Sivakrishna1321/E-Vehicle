import React from 'react'
import { useNavigate } from 'react-router-dom'

const LabDetailsCard = ({labSpecs, price}) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/contact-us")
    }
  return (
    <div className='w-full lg:w-max lg: sm:flex-1 sm:mx-auto box-border mt-4 px-10 py-4 rounded-3xl space-y-3 hover:scale-95 transition-all duration-300 ease-in-out flex flex-col items-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
        <h1 className='font-bold text-2xl'>{price} Lakhs Onwards</h1>

        <div className='space-y-3'>
            
             {labSpecs.map((item) => 
      
                  <div>✓ &#160; {item}</div>
      
            )}
      
        </div>

        <button onClick={handleClick}
         className='bg-black px-7 py-3 text-white rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out'>Contact Us</button>
    </div>
  )
}

export default LabDetailsCard