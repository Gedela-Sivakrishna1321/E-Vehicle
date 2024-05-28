import React from 'react'
import { TiTick } from "react-icons/ti";
import ElectricProfessionalCard from '../Components/ElectricProfessionalCard/ElectricProfessionalCard';
import { rolesData } from '../../Data/CoursesData';
import CourseCard from '../Components/CourseCard/CourseCard';
import { coursesData } from '../../Data/CoursesData';

const CoursePage = () => {
  return (
    <div className='mt-20'>

        {/* Who Should Take This Course */}
        <div className='my-10'>
            <h1 className='text-2xl sm:text-4xl text-center'>Who should take this <b>Electric Vehicle Design Course?</b></h1>
            
            <div className='flex lg:mx-auto   items-center mx-6 max-w-6xl justify-between  rounded-2xl my-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' >
                
                <div className='flex flex-col justify-center  gap-y-4 ml-8 py-5'>
                    <p><TiTick className='inline text-3xl text-green-500' />   Fresher’s, Diploma Holders, and Engineering Graduates</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Any Graduate</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Systems and Network Professionals</p>
                    <p><TiTick className='inline text-3xl text-green-500' />   Non-IT professionals aiming to venture into the Electric Vehicle industry</p>
                </div>

                {/* Image */}
                <div>
                    <img 
                    className=' hidden lg:block'
                    src="https://intellipaat.com/course-image/2020/08/who-can-apply.png" alt="" />
                </div>

            </div>
        </div>

        {/* Importance of Electric Vehicle Professionals */}
        <div className='mt-20'>
            <h1 className=' text-2xl sm:text-4xl text-center'>What roles can <b>Electric Vehicle professionals play?</b></h1>

            <div className=' mx-6 space-y-10 border-t-4 border-blue-800 rounded-2xl p-8 flex flex-col md:flex-row md:flex-wrap items-center justify-center my-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>   

                {rolesData.map((item) => <ElectricProfessionalCard data = {item} />)}
                
            </div>
        </div>

        {/* Course and Syllabus */}
        <div className='bg-green-50' >
            {coursesData.map((course) => <CourseCard course={course} /> )}
            
        </div>

        {/* FAQ's */}

    </div>
  )
}

export default CoursePage